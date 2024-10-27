import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="bg-gradient-to-r from-cyan-100 to-blue-100 min-h-screen">
            <Router>
                <Navbar />
                <Routes>
                    {/* <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/contact" element={<Contact />} /> */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
