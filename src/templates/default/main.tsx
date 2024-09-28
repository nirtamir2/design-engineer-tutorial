import { StrictMode } from "react";
import "@svg-use/vite/client";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./src/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
