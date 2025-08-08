import "./App.css";

import Footer from "./components/Footer";

import Home from "./pages/Home";
import ThemePreview from "./pages/ThemePreview.jsx";

function App() {
  // return <ThemePreview />;
  return <div className="wop theme-auto">
    <Home />
    <Footer />
  </div>;
}

export default App
