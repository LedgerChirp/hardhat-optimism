import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import App from "./App";
import Authentication from "./components/Authentication";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <header className="navbar">
          <div className="container">
            <div className="logo">Optify</div>
            <Authentication />
          </div>
        </header>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about/:cardId" element={<About />} />
          <Route path="/contact" element={<div>Contact page</div>} />
        </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
