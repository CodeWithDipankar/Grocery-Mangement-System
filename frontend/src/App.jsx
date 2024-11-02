import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./components/login";
import ForgotPassword from "./components/forgotpassword";
import OtpValidate from "./components/otpvalidate";
import ResetPassword from "./components/resetpassword";
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-cyan-100">
            <Router>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    closeOnClick
                    pauseOnHover
                    draggable
                    theme="colored"
                />
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
