import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./theme.css";
import "@fontsource/instrument-serif";
import "@fontsource-variable/jetbrains-mono/wght.css";

import App from "@/App.js";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
