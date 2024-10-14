import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/Navbar'; // Updated name to MyNavbar
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS import

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
