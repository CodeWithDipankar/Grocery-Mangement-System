// import Login from "./login";
// import './Home.css'
// import NavBar from './components/navbar'

// function App(){
//   return(
//     <div class = "main-app">
//       <NavBar />
//       <Login />
//     </div>
    
//   )
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './login';
import Navbar from './components/navbar'

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;

