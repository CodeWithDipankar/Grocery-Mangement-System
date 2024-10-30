import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./components/login";
import ForgotPassword from "./components/forgotpassword";
import OtpValidate from "./components/otpvalidate";
import ResetPassword from "./components/resetpassword";

function App() {
    return (
         <div className="min-h-screen bg-gradient-to-r from-blue-50 to-cyan-100">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                    <Route path="/otpvalidate" element={<OtpValidate />} />
                    <Route path="/resetpassword" element={<ResetPassword />} />
                    {/* <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} /> */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
