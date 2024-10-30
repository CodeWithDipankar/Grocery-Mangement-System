import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="space-y-5 rounded-xl bg-transparent bg-opacity-95 shadow-2xl w-auto max-w-md">
                <div className="divide-y-2 divide-slate-400/25">
                    {/* Header */}
                    <h2 className="py-5 text-2xl font-normal text-center text-gray-600">
                        Reset Password
                    </h2>

                    {/* Form Fields */}
                    <div className="space-y-8 px-10 py-4">
                        <div>
                            <label
                                htmlFor="Email"
                                className="block text-gray-600 font-medium mb-1"
                            >
                                Email:
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 px-2 py-1.5 border-2 border-slate-600 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-slate-500 transition duration-200"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="New Password"
                                className="block text-gray-600 font-medium mb-1"
                            >
                                New Password:
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your New password"
                                className="w-80 px-2 py-1.5 border-2 border-slate-600 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-slate-700 transition duration-200"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="Re-type Password"
                                className="block text-gray-600 font-medium mb-1"
                            >
                                Re-type Password:
                            </label>
                            <input
                                type="password"
                                placeholder="Enter the password again"
                                className="w-80 px-2 py-1.5 border-2 border-slate-600 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-slate-700 transition duration-200"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    {/* Centered Submit Button */}
                    <div className="pb-6 flex justify-center">
                        <button className="mt-6 w-28 py-2 rounded-full font-light text-white bg-slate-600 hover:bg-slate-800 shadow-md transition duration-300 border-slate-950" onClick={()=> navigate('/login')}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
