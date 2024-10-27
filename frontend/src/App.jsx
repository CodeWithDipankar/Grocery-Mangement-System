// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Login from "./pages/Login";
// import Contact from "./pages/Contact";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                {/* <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contact" element={<Contact />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
