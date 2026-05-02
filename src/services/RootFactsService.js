import { pipeline, env } from '@huggingface/transformers';
import { TONE_CONFIG } from '../utils/config.js';
import { isWebGPUSupported, logError } from '../utils/common.js';

export class RootFactsService {
  constructor() {
    this.generator = null;
    this.isModelLoaded = false;
    this.isGenerating = false;
    this.config = null;
    this.currentBackend = null;
    this.currentTone = TONE_CONFIG.defaultTone;
  }

  /**
   * [Basic] Load the Transformers.js text-generation pipeline.
   * [Advance] Adaptive backend: prefer WebGPU, fall back to WebGL/wasm.
   */
  async loadModel(onProgress) {
    try {
      // Use q4 quantisation so we don't download the full model
      env.allowLocalModels = false;

      // ── Adaptive Backend ────────────────────────────────────────────────
      let device = 'wasm';
      if (isWebGPUSupported()) {
        device = 'webgpu';
        this.currentBackend = 'webgpu';
        console.info('✅ Transformers.js using WebGPU');
      } else {
        this.currentBackend = 'wasm';
        console.info('✅ Transformers.js using WASM');
      }

      onProgress?.('Memuat Model Bahasa (0%)');

      this.generator = await pipeline(
        'text2text-generation',
        'Xenova/LaMini-Flan-T5-248M',
        {
          dtype: 'q4',
          device,
          progress_callback: (progressInfo) => {
            if (progressInfo.status === 'progress' && progressInfo.total) {
              const pct = Math.round(
                (progressInfo.loaded / progressInfo.total) * 100,
              );
              onProgress?.(`Memuat Model Bahasa (${pct}%)`);
            }
          },
        },
      );

      this.isModelLoaded = true;
      console.info('✅ Generative AI model loaded');
    } catch (error) {
      logError('RootFactsService.loadModel', error);
      throw error;
    }
  }

  /**
   * [Advance] Set the dynamic persona / tone.
   */
  setTone(tone) {
    if (TONE_CONFIG.availableTones.some((t) => t.value === tone)) {
      this.currentTone = tone;
    }
  }

  /**
   * [Basic] Generate a fun fact for the given vegetable label.
   * [Skilled] Use temperature, max_new_tokens, top_p, do_sample.
   * [Advance] Include dynamic tone persona in the prompt.
   */
  async generateFacts(vegetableName) {
    if (!this.isReady()) {
      throw new Error('Generative AI model belum siap');
    }
    if (this.isGenerating) {
      return null; // prevent concurrent generations
    }

    this.isGenerating = true;
    try {
      const toneConfig = TONE_CONFIG.availableTones.find(
        (t) => t.value === this.currentTone,
      );
      const toneInstruction = toneConfig?.instruction ?? '';

      const prompt =
        `Tell me one interesting fun fact about ${vegetableName}. ` +
        `${toneInstruction} ` +
        'Be concise (2-3 sentences) and educational.';

      const output = await this.generator(prompt, {
        max_new_tokens: 150,
        temperature: 0.85,
        top_p: 0.92,
        do_sample: true,
        repetition_penalty: 1.2,
      });

      return output[0]?.generated_text?.trim() ?? null;
    } catch (error) {
      logError('RootFactsService.generateFacts', error);
      throw error;
    } finally {
      this.isGenerating = false;
    }
  }

  /** [Basic] Whether the pipeline is ready to generate. */
  isReady() {
    return this.isModelLoaded && this.generator !== null;
  }
}
