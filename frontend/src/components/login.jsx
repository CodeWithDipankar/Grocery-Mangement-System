export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-">
            <div className="space-y-5 rounded-xl bg-transparent bg-opacity-95 shadow-2xl w-auto max-w-md">
                
                {/* Header with Divider */}
                <h2 className="mt-4 text-2xl font-normal text-center text-gray-600">Login</h2>
                <div className="border-t-2 border-gray-300 "></div>

                {/* Form Fields */}
                <div className="space-y-8 px-10 py-3">
                    <div>
                        <label htmlFor="Email" className="block text-gray-600 font-medium mb-1">Email:</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-80 px-2 py-2 border-2 border-sky-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-200"
                        />
                    </div>

                    <div>
                        <label htmlFor="Password" className="block text-gray-600 font-medium mb-1">Password:</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-80 px-2 py-2 border-2 border-sky-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-200"
                        />
                    </div>
                </div>

                {/* Centered Submit Button */}
                <div className="flex justify-center">
                    <button className="w-24 py-1 rounded font-light text-white  bg-slate-600 hover:bg-slate-700 shadow-md transition duration-300border border-slate-500 hover:border-slate-400">
                        Submit
                    </button>
                </div>

                {/* Footer Section with Divider */}
                <div className="border-t-2 border-gray-200 my-6"></div>
                <div className="text-center text-sm text-gray-500">
                    <a href="#" className="text-cyan-500 hover:text-cyan-600 hover:underline transition duration-200">
                        Forgot password? Click here
                    </a>
                </div>
            </div>
        </div>
    );
}
