import { StrictMode } from 'react'; // Helps highlight potential problems in development
import { createRoot } from 'react-dom/client'; // React 18 root API
import './index.css'; // Global styles (Tailwind + custom CSS)
import App from './App.jsx'; // Main App component

// Create root and render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Main application */}
  </StrictMode>,
);