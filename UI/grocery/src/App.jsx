
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/login';
import Navbar from './components/navbar'
import ForgotPassword from './components/forgotPassword';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './style/saas/custom.scss'; 
import './style/css/override.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/forgot_password" element={<ForgotPassword />} />
            </Routes>
        </Router>
    );
}

export default App;

