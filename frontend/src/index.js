import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<div>Contact page</div>} />
        </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
