import logo from './logo.svg';
import './App.css';
import { Html5Qrcode, Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect, useState } from 'react';
import HotelList from './HotelList';


function App() {
  const [scanResult, setScanResult] = useState(null);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [scanner, setScanner] = useState(null);
  const [permissionText, setPermissionText] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [cameraId, setCameraId] = useState(null);
  const [cameras, setCameras] = useState([]);

  useEffect(() => {
    if (isScanning && !scanner) {
      const readerElement = document.getElementById("reader");
      if (readerElement) {
        const newScanner = new Html5QrcodeScanner("reader", {
          qrbox: {
            width: 250,
            height: 250,
          },
          fps: 10,
        });
        setScanner(newScanner);
      } else {
        console.error("HTML Element with id='reader' not found");
      }
    }
  }, [isScanning, scanner]);

  const startScanning = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(() => {
        setCameraPermission(true);
        setPermissionText('Permission OK');
        setIsScanning(true); // Show the reader div
        if (scanner) {
          scanner.render(success, error);
        }

        function success(result) {
          scanner.clear();
          setScanResult(result);
          window.location.href = result; // Redirect to the scanned link
        }

        function error(err) {
          console.warn(err);
        }
      })
      .catch((err) => {
        console.warn("Camera permission denied or error starting video source:", err);
        setCameraPermission(false);
        setPermissionText('Permission NOT OK or error starting video source');
      });
  };

  useEffect(() => {
    if (scanner && isScanning) {
      scanner.render(success, error);

      function success(result) {
        scanner.clear();
        setScanResult(result);
        window.location.href = result; // Redirect to the scanned link
      }

      function error(err) {
        console.warn(err);
      }
    }
  }, [scanner, isScanning]);

  const handleCameraChange = (event) => {
    setCameraId(event.target.value);
  };

  const requestAccess = () => {
    Html5Qrcode.getCameras().then(devices => {
      if (devices && devices.length) {
        setCameras(devices);
        // Try to find the back camera
        const backCamera = devices.find(device => device.label.toLowerCase().includes('back'));
        setCameraId(backCamera ? backCamera.id : devices[0].id);
      }
    }).catch(err => {
      console.error("Error getting cameras:", err);
    });
  };

  return (
    <div className="App container">
      <h1 className="text-center my-4">QR Code Scanner</h1>
      {permissionText && <div className="alert alert-info">{permissionText}</div>}
      {scanResult 
        ? <div className="alert alert-success">Success: <a href={scanResult}>{scanResult}</a></div>
        : isScanning && <div id="reader" className="reader"></div>
      }
      <div className="my-3">
        <button className="btn btn-primary" onClick={startScanning}>Start Scanning</button>
      </div>
      {cameraPermission === false && (
        <div className="my-3">
          <button className="btn btn-warning" onClick={requestAccess}>Request Camera Access</button>
        </div>
      )}
      <div className="my-3">
        <select className="form-select" onChange={handleCameraChange} value={cameraId}>
          {cameras.map(camera => (
            <option key={camera.id} value={camera.id}>{camera.label}</option>
          ))}
        </select>
      </div>
      <HotelList />
    </div>
  );
}

export default App;
