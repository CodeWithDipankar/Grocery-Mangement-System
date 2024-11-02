import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { showToast } from "./toastservice";
import { serverLink } from "./constant";

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();

    const headerVal = location.state?.logintype || "Login";
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(null);

    const [password, setPassword] = useState("");
    const [isPassValid, setIsPassValid] = useState(null);
    const [errorMsg,setErrorMessage] = useState("");

    // Email validation function
    const handleEmailValidation = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        if (emailValue === "") {
            setIsEmailValid(null);
        } else {
            setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue));
        }
    };

    const checkPassLen = (e) => {
        const pass = e.target.value;
        setPassword(pass);
        if (pass === "") {
            setIsPassValid(null);
        } else {
            setIsPassValid(pass.length >= 8);
        }
    };

    // Form submission handling
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isEmailValid || !isPassValid) return;

        try {
            const response = await fetch(`${serverLink}/user_check`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (data.status === "success") {
                console.log("Login successful");
                showToast("success","Login Success.")
                navigate("/otpvalidate");  // Redirect to a different page after login
            } else {
                setErrorMessage(data.message);
                showToast("error","Login Faild, password or email incorrect.")
            }
        } catch (error) {
            console.error("Error:", error);
            setErrorMessage("An error occurred. Please try again.");
            showToast("error","An error occurred. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="space-y-5 rounded-xl bg-transparent bg-opacity-95 shadow-2xl w-auto max-w-md">
                <div className="divide-y-2 divide-slate-400/25">
                    {/* Header */}
                    <h2 className="py-5 text-2xl font-normal text-center text-gray-600">
                        {headerVal}
                    </h2>

                    {/* Form Fields */}
                    <form onSubmit={handleSubmit} className="space-y-8 px-10 py-4">
                        <div>
                            <label htmlFor="Email" className="block text-gray-600 font-medium mb-1">
                                Email:
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleEmailValidation}
                                className={`w-80 px-2 py-1.5 border-2 rounded-lg text-gray-700 focus:outline-none transition duration-200 ${
                                    isEmailValid === null
                                        ? "border-slate-600"
                                        : isEmailValid
                                        ? "border-green-500"
                                        : "border-red-500"
                                }`}
                                required
                            />
                            {isEmailValid === false && (
                                <p className="text-red-500 text-sm mt-1 flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCircleExclamation} className="ml-2" />
                                    Please enter a valid email address.
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="Password" className="block text-gray-600 font-medium mb-1">
                                Password:
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={checkPassLen}
                                className={`w-80 px-2 py-1.5 border-2 rounded-lg text-gray-700 focus:outline-none transition duration-200 ${
                                    isPassValid === null
                                        ? "border-slate-600"
                                        : isPassValid
                                        ? "border-green-500"
                                        : "border-red-500"
                                }`}
                                required
                            />
                            {isPassValid === false && (
                                <p className="text-red-500 text-sm mt-1 flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCircleExclamation} className="ml-2" />
                                    Password must be at least 8 characters.
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="pb-6 flex justify-center">
                            <button
                                type="submit"
                                className="mt-6 w-28 py-2 rounded-full font-light text-white bg-slate-600 hover:bg-slate-800 shadow-md transition duration-300 border-slate-950"
                            >
                                Submit
                            </button>
                        </div>
                    </form>

                    {/* Footer Section with Divider */}
                    <div className="py-3 text-sm flex text-gray-500 items-center justify-center">
                        <div>Forgot password?</div>
                        <div
                            className="ml-1 text-cyan-500 hover:text-cyan-600 hover:underline transition duration-200 cursor-pointer"
                            onClick={() => navigate("/forgotpassword")}
                        >
                            Click here
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
