import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const labelStyle =
        "block text-lg font-semibold mb-2";
    const textFieldStyle =
        "w-full px-4 py-2 text-base border rounded-md transition focus:ring focus:outline-none text-gray-800 bg-white placeholder-gray-400";

    return (
        <div className="min-h-[852px] flex items-center justify-center">
            <div className="bg-gray-100 shadow-md rounded-lg max-w-md w-full px-8 py-6">
                <h1 className="text-3xl font-extrabold text-center mt-4 py-2">
                    Login
                </h1>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="username" className={labelStyle}>
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Your Username"
                            required
                            className={textFieldStyle}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className={labelStyle}>
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Your Password"
                            required
                            minLength={8}
                            maxLength={20}
                            className={textFieldStyle}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-6 py-2 text-xl rounded-md border"
                        >
                            Login
                        </button>
                    </div>
                </form>

                <p className="text-center text-gray-600  mt-4">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                    >
                        Signup Here
                    </Link>
                </p>
            </div>
        </div>
    );
}