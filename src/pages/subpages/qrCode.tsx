import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode';
import '@/SCSS/shared/qrCode.scss';

export default function QRCodePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, 'https://code-and-circuit-forge.netlify.app', {
        width: 180,
        color: {
          dark: '#0e0e0e',
          light: '#ffffff',
        },
      });
    }
  }, []);

  function downloadQR() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'code-and-circuit-forge-qr.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  return (
    <div className="qrPage">
      <div className="qrCard">
        <div className="qrCard__wordmark">
          Code <span className="qrCard__accent">&</span> Circuit Forge
        </div>
        <p className="qrCard__tagline">React · TypeScript · Clean Architecture</p>

        <div className="qrCard__wrap">
          <div className="qrCard__frame">
            <canvas ref={canvasRef} />
          </div>
        </div>

        <button className="qrCard__download" onClick={downloadQR}>
          ↓ Download QR Code
        </button>

        <div className="qrCard__divider" />

        <div className="qrCard__info">
          <p className="qrCard__name">Code & Circuit Forge</p>
          <p className="qrCard__role">React · TypeScript · Clean Architecture</p>
          <p className="qrCard__url">code-and-circuit-forge.netlify.app</p>
        </div>

        <p className="qrCard__hint">Scan to view portfolio</p>
      </div>

      <Link to="/" className="qrCard__back">← Back to site</Link>
    </div>
  );
}