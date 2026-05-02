import { useState, useRef, useEffect } from 'react';
import { Camera, Mic, ScanLine, Image as ImageIcon, Upload } from 'lucide-react';
import { TONE_CONFIG } from '../utils/config';

function CameraSection({
  isRunning,
  onToggleCamera,
  onScanImage,
  onToneChange,
  services,
  modelStatus,
  error,
  currentTone
}) {
  const [fps, setFps] = useState(30);
  const [cameraType, setCameraType] = useState('default');
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    if (services.camera) {
      if (videoRef.current && !services.camera.video) {
        services.camera.setVideoElement(videoRef.current);
      }
      if (canvasRef.current && !services.camera.canvas) {
        services.camera.setCanvasElement(canvasRef.current);
      }
    }
  });

  useEffect(() => {
    if (services.camera) {
      services.camera.setFPS(fps);
    }
  }, [fps, services.camera]);

  const handleCameraChange = (newCameraType) => {
    setCameraType(newCameraType);
    if (services.camera && services.camera.isActive()) {
      services.camera.startCamera(newCameraType);
    }
  };

  const handleFpsChange = (newFps) => {
    setFps(Number(newFps));
  };

  const handleToneChange = (e) => {
    const newTone = e.target.value;
    if (onToneChange) {
      onToneChange(newTone);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        setPreviewImage(event.target.result);
        onScanImage(img);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  const isModelReady = modelStatus === 'Model AI Siap';
  const buttonDisabled = !isModelReady;
  const buttonText = isRunning ? 'Stop Scan' : 'Mulai Scan';

  return (
    <section className="camera-section" aria-label="Camera Feed and Controls">
      <div className="camera-container">
        <div className="camera-wrapper">
          <video
            ref={videoRef}
            id="media-video"
            autoPlay
            muted
            playsInline
            className={`${isRunning ? '' : 'hidden'} ${cameraType === 'front' ? 'mirrored' : ''}`}
          />

          <canvas
            ref={canvasRef}
            id="media-canvas"
            className="hidden"
          />

          {previewImage && !isRunning && (
            <img 
              src={previewImage} 
              alt="Preview" 
              className="preview-image"
            />
          )}

          <div className={`camera-overlay ${isRunning ? 'active' : ''}`}>
            <div className="overlay-frame"></div>
          </div>

          {!isRunning && !previewImage && (
            <div className="camera-placeholder">
              <Camera size={48} />
              <p>Kamera tidak aktif</p>
              {error && (
                <p style={{ color: '#ef4444', fontSize: '0.8125rem', marginTop: '0.5rem' }}>
                  {error}
                </p>
              )}
            </div>
          )}
        </div>

        <div className="camera-controls">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: 'none' }}
          />
          
          <button
            className="secondary-btn"
            onClick={triggerUpload}
            disabled={buttonDisabled}
            title="Upload Gambar"
          >
            <Upload size={20} />
          </button>

          <button
            id="btn-toggle"
            className={`capture-btn ${isRunning ? 'scanning' : ''}`}
            onClick={() => {
              setPreviewImage(null);
              onToggleCamera(cameraType);
            }}
            disabled={buttonDisabled}
            aria-label={buttonText}
            style={{ opacity: buttonDisabled ? 0.6 : 1 }}
          >
            <ScanLine size={24} />
          </button>
        </div>

        <div className="settings-bar">
          <div className="setting-item">
            <Camera size={16} />
            <select
              id="camera-select"
              value={cameraType}
              onChange={(e) => handleCameraChange(e.target.value)}
              disabled={isRunning}
            >
              <option value="default">Belakang</option>
              <option value="front">Depan</option>
            </select>
          </div>

          <div className="setting-item fps-setting">
            <span id="fps-label">{fps} FPS</span>
            <input
              id="fps-slider"
              type="range"
              min="15"
              max="60"
              step="15"
              value={fps}
              onChange={(e) => handleFpsChange(e.target.value)}
              disabled={isRunning}
            />
          </div>

          <div className="setting-item tone-setting">
            <Mic size={16} />
            <select
              id="tone-select"
              value={currentTone || 'normal'}
              onChange={handleToneChange}
              disabled={isRunning}
            >
              {TONE_CONFIG.availableTones.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CameraSection;
