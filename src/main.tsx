import "./index.css";
import "./styles/globals.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SubmitPage from "./pages/SubmitPage";
import VotePage from "./pages/VotePage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  <BrowserRouter>
   <Routes>
      <Route path="/" element={<App />} />
      <Route path="/submit" element={<SubmitPage />} />
      <Route path="/vote" element={<VotePage />} />
    </Routes>
  </BrowserRouter>
);
