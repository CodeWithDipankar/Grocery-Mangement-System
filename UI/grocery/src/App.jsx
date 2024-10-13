import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import About from './About';
import Login from './Login';
import Home from './Home';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if this is a hard reload by comparing the current URL with the previous URL
    const previousUrl = localStorage.getItem('previousUrl');
    if (location.href !== previousUrl) {
      navigate('/');
    }

    // Store the current URL for the next reload
    localStorage.setItem('previousUrl', location.href);
  }, [location, navigate]);

  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;