import { useRef, useEffect, useState, useCallback } from 'react';
import Header from './components/Header';
import CameraSection from './components/CameraSection';
import InfoPanel from './components/InfoPanel';
import { useAppState } from './hooks/useAppState';
import { DetectionService } from './services/DetectionService';
import { CameraService } from './services/CameraService';
import { RootFactsService } from './services/RootFactsService';
import { isValidDetection } from './utils/config';
import { logError } from './utils/common';

function App() {
  const { state, actions } = useAppState();
  const detectionLoopRef = useRef(null);
  const isRunningRef = useRef(false);
  const lastDetectedRef = useRef(null);
  const [currentTone, setCurrentTone] = useState('normal');

  // ── Service singletons (stable across renders) ─────────────────────────
  const detectorRef = useRef(null);
  const cameraRef = useRef(null);
  const generatorRef = useRef(null);

  // ── 1. Initialise services on mount ───────────────────────────────────
  useEffect(() => {
    const detector = new DetectionService();
    const camera = new CameraService();
    const generator = new RootFactsService();

    detectorRef.current = detector;
    cameraRef.current = camera;
    generatorRef.current = generator;

    actions.setServices({ detector, camera, generator });

    const init = async () => {
      try {
        // Load TF model with progress
        await detector.loadModel((pct) => {
          if (pct < 100) {
            actions.setModelStatus(`Menunggu Model... ${pct}%`);
          }
        });

        // Load Transformers.js model with progress
        await generator.loadModel((msg) => {
          actions.setModelStatus(msg);
        });

        actions.setModelStatus('Model AI Siap');
      } catch (err) {
        logError('App.init', err);
        actions.setError('Gagal memuat model AI. Silakan muat ulang halaman.');
        actions.setModelStatus('Gagal Memuat Model');
      }
    };

    init();

    // ── Cleanup on unmount ─────────────────────────────────────────────
    return () => {
      isRunningRef.current = false;
      if (detectionLoopRef.current) cancelAnimationFrame(detectionLoopRef.current);
      cameraRef.current?.stopCamera();
    };
  }, []); // Only run once on mount

  // ── 2. Detection loop ──────────────────────────────────────────────────
  const startDetectionLoop = useCallback(() => {
    const camera = cameraRef.current;
    const detector = detectorRef.current;
    const generator = generatorRef.current;

    if (!camera || !detector || !generator) return;

    let lastFrameTime = 0;

    const loop = async (timestamp) => {
      if (!isRunningRef.current) return;

      const fpsInterval = 1000 / (camera.fps || 30);
      const elapsed = timestamp - lastFrameTime;

      if (elapsed >= fpsInterval && camera.isReady()) {
        lastFrameTime = timestamp;

        try {
          const result = await detector.predict(camera.video);

          if (isValidDetection(result)) {
            // Only re-trigger fact generation when the label changes
            if (lastDetectedRef.current !== result.className) {
              lastDetectedRef.current = result.className;
              actions.setDetectionResult(result);
              actions.setAppState('result');
              actions.setFunFactData(null); // show loading spinner

              // Hentikan kamera otomatis agar hasil stabil dan mudah dibaca (Saran Reviewer)
              stopCameraOnly();

              try {
                const fact = await generator.generateFacts(result.className);
                actions.setFunFactData(fact ?? 'error');
              } catch {
                actions.setFunFactData('error');
              }
            }
          } else {
            // Low confidence → reset to scanning state
            if (lastDetectedRef.current !== null) {
              lastDetectedRef.current = null;
              actions.resetResults();
            }
          }
        } catch (err) {
          logError('detectionLoop', err);
        }
      }

      detectionLoopRef.current = requestAnimationFrame(loop);
    };

    detectionLoopRef.current = requestAnimationFrame(loop);
  }, [actions]);

  // ── 3. Stop camera without resetting results (for auto-stop) ─────────
  const stopCameraOnly = useCallback(() => {
    const camera = cameraRef.current;
    if (!camera) return;

    isRunningRef.current = false;
    if (detectionLoopRef.current) {
      cancelAnimationFrame(detectionLoopRef.current);
      detectionLoopRef.current = null;
    }
    camera.stopCamera();
    actions.setRunning(false);
  }, [actions]);

  // ── 4. Toggle camera on/off (manual) ──────────────────────────────────
  const handleToggleCamera = useCallback(async (preferredCamera = 'default') => {
    const camera = cameraRef.current;
    if (!camera) return;

    if (isRunningRef.current) {
      // ── Stop (Manual) ──
      stopCameraOnly();
      lastDetectedRef.current = null;
      actions.resetResults();
    } else {
      // ── Start ──
      try {
        await camera.startCamera(preferredCamera);
        isRunningRef.current = true;
        actions.setRunning(true);
        actions.setAppState('analyzing');
      } catch (err) {
        actions.setError(err.message);
      }
    }
  }, [actions, startDetectionLoop, stopCameraOnly]);

  // ── 5. Manual Capture handler (Click to Scan) ──────────────────────
  const handleCapture = useCallback(async () => {
    const camera = cameraRef.current;
    const detector = detectorRef.current;
    const generator = generatorRef.current;
    if (!camera || !detector || !generator || !camera.video) return;

    try {
      actions.setAppState('analyzing');
      const result = await detector.predict(camera.video);

      if (isValidDetection(result)) {
        actions.setDetectionResult(result);
        actions.setAppState('result');
        actions.setFunFactData(null);
        
        // Langsung hentikan kamera setelah capture berhasil
        stopCameraOnly();

        const fact = await generator.generateFacts(result.className);
        actions.setFunFactData(fact ?? 'error');
      } else {
        actions.setError('Sayuran tidak terdeteksi. Pastikan objek terlihat jelas.');
        actions.setAppState('analyzing'); // Tetap di state menganalisis atau scan ulang
      }
    } catch (err) {
      logError('handleCapture', err);
      actions.setError('Gagal menangkap gambar.');
    }
  }, [actions, stopCameraOnly]);

  // ── 6. Image Upload handler ───────────────────────────────────────────
  const handleScanImage = useCallback(async (imageElement) => {
    const detector = detectorRef.current;
    const generator = generatorRef.current;
    if (!detector || !generator) return;

    // Stop camera if running
    if (isRunningRef.current) {
      handleToggleCamera();
    }

    try {
      actions.setAppState('analyzing');
      const result = await detector.predict(imageElement);

      if (isValidDetection(result)) {
        actions.setDetectionResult(result);
        actions.setAppState('result');
        actions.setFunFactData(null);
        const fact = await generator.generateFacts(result.className);
        actions.setFunFactData(fact ?? 'error');
      } else {
        actions.setError('Sayuran tidak terdeteksi atau tingkat kepercayaan rendah.');
        actions.setAppState('idle');
      }
    } catch (err) {
      logError('handleScanImage', err);
      actions.setError('Gagal memproses gambar.');
      actions.setAppState('idle');
    }
  }, [actions, handleToggleCamera]);

  // ── 5. Dynamic tone handler ───────────────────────────────────────────
  const handleToneChange = useCallback(
    (tone) => {
      setCurrentTone(tone);
      generatorRef.current?.setTone(tone);
      // If currently showing a result, re-generate with the new tone
      if (state.detectionResult) {
        actions.setFunFactData(null);
        generatorRef.current
          ?.generateFacts(state.detectionResult.className)
          .then((fact) => actions.setFunFactData(fact ?? 'error'))
          .catch(() => actions.setFunFactData('error'));
      }
    },
    [state.detectionResult, actions],
  );

  // ── 5. Copy to clipboard ──────────────────────────────────────────────
  const handleCopyFact = useCallback(async () => {
    if (state.funFactData && state.funFactData !== 'error') {
      try {
        await navigator.clipboard.writeText(state.funFactData);
      } catch (err) {
        logError('copyToClipboard', err);
      }
    }
  }, [state.funFactData]);

  // ── Render ────────────────────────────────────────────────────────────
  return (
    <div className="app-container">
      <Header modelStatus={state.modelStatus} />

      <main className="main-content">
        <CameraSection
          isRunning={state.isRunning}
          onToggleCamera={handleToggleCamera}
          onCapture={handleCapture}
          onScanImage={handleScanImage}
          onToneChange={handleToneChange}
          services={state.services}
          modelStatus={state.modelStatus}
          error={state.error}
          currentTone={currentTone}
        />

        <InfoPanel
          appState={state.appState}
          detectionResult={state.detectionResult}
          funFactData={state.funFactData}
          error={state.error}
          onCopyFact={handleCopyFact}
        />
      </main>

      <footer className="footer">
        <p>Powered by TensorFlow.js &amp; Transformers.js</p>
      </footer>

      {state.error && (
        <div
          style={{
            position: 'fixed',
            bottom: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '380px',
            padding: '0.875rem 1rem',
            background: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: 'var(--radius-md)',
            color: '#991b1b',
            fontSize: '0.8125rem',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            zIndex: 1000,
          }}
        >
          <strong>Error:</strong> {state.error}
          <button
            onClick={() => actions.setError(null)}
            style={{
              marginLeft: 'auto',
              background: 'transparent',
              border: 'none',
              fontSize: '1.25rem',
              cursor: 'pointer',
              color: '#991b1b',
              padding: 0,
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
