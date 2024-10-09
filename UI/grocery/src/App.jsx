import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/All.css';
import Navbar from './Navbar';
import About from './About';
import Login from './Login';
import Home from './Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
