import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import Resume from "./Pages/Home/resume"; // Import the Resume component


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <p>ghvghcjcjhcjg</p>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} /> {/* Add this route */}
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
