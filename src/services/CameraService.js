import { logError, getCameraErrorMessage } from '../utils/common.js';

export class CameraService {
  constructor() {
    this.stream = null;
    this.video = null;
    this.canvas = null;
    this.config = null;
    this._fpsInterval = null;
    this._fps = 30;
    this._cameras = [];
  }

  setVideoElement(videoElement) {
    this.video = videoElement;
  }

  setCanvasElement(canvasElement) {
    this.canvas = canvasElement;
  }

  /**
   * [Basic] Load available video input devices and store them.
   */
  async loadCameras() {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      this._cameras = devices.filter((d) => d.kind === 'videoinput');
      return this._cameras;
    } catch (error) {
      logError('CameraService.loadCameras', error);
      throw error;
    }
  }

  /**
   * [Basic] Build MediaStream constraints from the selected camera id.
   */
  _getConstraints(selectedCameraId) {
    const base = {
      width: { ideal: 640 },
      height: { ideal: 480 },
    };

    if (selectedCameraId === 'front') {
      return { video: { ...base, facingMode: 'user' } };
    }
    if (selectedCameraId && selectedCameraId !== 'default') {
      return { video: { ...base, deviceId: { exact: selectedCameraId } } };
    }
    return { video: { ...base, facingMode: 'environment' } };
  }

  /**
   * [Basic] Start the camera with the given device and attach it to the video element.
   */
  async startCamera(selectedCameraId = 'default') {
    try {
      // Stop any existing stream first
      this.stopCamera();

      const constraints = this._getConstraints(selectedCameraId);
      this.stream = await navigator.mediaDevices.getUserMedia(constraints);

      if (this.video) {
        this.video.srcObject = this.stream;
        await new Promise((resolve, reject) => {
          this.video.onloadedmetadata = resolve;
          this.video.onerror = reject;
        });
        await this.video.play();
      }

      return this.stream;
    } catch (error) {
      logError('CameraService.startCamera', error);
      throw new Error(getCameraErrorMessage(error));
    }
  }

  /**
   * [Basic] Stop the camera stream and clean up resources.
   */
  stopCamera() {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = null;
    }
    if (this.video) {
      this.video.srcObject = null;
    }
  }

  /**
   * [Skilled] Configure the target FPS for inference.
   */
  setFPS(fps) {
    this._fps = fps;
  }

  /** Expose current FPS value for the detection loop. */
  get fps() {
    return this._fps;
  }

  /** [Basic] Whether the camera stream is active. */
  isActive() {
    return this.stream !== null && this.stream.active;
  }

  /** [Basic] Whether the video element has valid dimensions and is ready. */
  isReady() {
    return (
      this.video !== null &&
      this.video.readyState >= 2 &&
      this.video.videoWidth > 0
    );
  }
}