import * as tf from '@tensorflow/tfjs';
import { isWebGPUSupported, logError, validateModelMetadata } from '../utils/common.js';

export class DetectionService {
  constructor() {
    this.model = null;
    this.labels = [];
    this.config = null;
  }

  /**
   * [Basic] Load model and metadata concurrently, store to instance.
   * [Advance] Adaptive Backend strategy: WebGPU → WebGL fallback.
   */
  async loadModel(onProgress) {
    try {
      // ── Adaptive Backend ──────────────────────────────────────────────────
      if (isWebGPUSupported()) {
        try {
          await import('@tensorflow/tfjs-backend-webgpu');
          await tf.setBackend('webgpu');
          await tf.ready();
          this.currentBackend = 'webgpu';
          console.info('✅ TensorFlow.js using WebGPU backend');
        } catch {
          console.warn('⚠️ WebGPU not available, falling back to WebGL');
          await tf.setBackend('webgl');
          await tf.ready();
          this.currentBackend = 'webgl';
        }
      } else {
        await tf.setBackend('webgl');
        await tf.ready();
        this.currentBackend = 'webgl';
        console.info('✅ TensorFlow.js using WebGL backend');
      }

      onProgress?.(10);

      // ── Load model + metadata concurrently ────────────────────────────────
      const [model, metaResponse] = await Promise.all([
        tf.loadLayersModel('/model/model.json', {
          onProgress: (fraction) => onProgress?.(10 + Math.round(fraction * 80)),
        }),
        fetch('/model/metadata.json'),
      ]);

      const metadata = await metaResponse.json();

      if (!validateModelMetadata(metadata)) {
        throw new Error('Invalid model metadata');
      }

      this.model = model;
      this.labels = metadata.labels;
      this.imageSize = metadata.imageSize || 224;

      onProgress?.(100);
      console.info(`✅ Detection model loaded (${this.labels.length} classes)`);
    } catch (error) {
      logError('DetectionService.loadModel', error);
      throw error;
    }
  }

  /**
   * [Basic] Run prediction on a given image element.
   * [Advance] Use tf.tidy() to prevent memory leaks on every inference cycle.
   */
  async predict(imageElement) {
    if (!this.isLoaded()) {
      throw new Error('Model belum dimuat');
    }

    const predictions = tf.tidy(() => {
      // Pre-process: resize → normalise → batch
      const tensor = tf.browser
        .fromPixels(imageElement)
        .resizeBilinear([this.imageSize, this.imageSize])
        .toFloat()
        .div(tf.scalar(255))
        .expandDims(0);

      return this.model.predict(tensor);
    });

    const data = await predictions.data();
    predictions.dispose();

    // Map probabilities to label objects
    const results = Array.from(data).map((score, i) => ({
      className: this.labels[i],
      score,
    }));

    // Return the top prediction
    results.sort((a, b) => b.score - a.score);
    return results[0];
  }

  /** [Basic] Check whether the model is ready. */
  isLoaded() {
    return this.model !== null && this.labels.length > 0;
  }
}
