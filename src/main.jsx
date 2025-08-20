import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import "./theme.css";
import './index.css';
import App from './App.jsx';
import ThemePreview from "./pages/ThemePreview.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="portfolio">
          <Route index element={<App />} />
          <Route path="theme" element={<ThemePreview />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
