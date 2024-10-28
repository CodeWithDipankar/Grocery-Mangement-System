export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="space-y-6 p-8 rounded-lg bg-transparent bg-opacity-80 shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-serif font-medium text-center text-gray-700">Login</h2>
                <label htmlFor="Email">Email:</label>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border-2 border-sky-300 rounded-full focus:outline-none focus:border-blue-400"
                />
                <label htmlFor="Password">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border-2 border-sky-300 rounded focus:outline-none focus:border-blue-400"
                />
                
                <button className="w-full py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition duration-300">
                    Login
                </button>
            </div>
        </div>
    );
}
