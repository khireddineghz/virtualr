import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import codeImage from "../assets/code.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is a placeholder for actual authentication logic
    if (email && password) {
      console.log("Login successful:", { email });
      navigate("/"); // Redirect to home page after login
    } else {
      setError("Please enter both email and password");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left side - Login Form (50%) */}
      <div className="w-1/2 flex flex-col justify-center px-10 lg:px-20 bg-neutral-900">
        <div className="max-w-md w-full mx-auto space-y-8">
          <div>
            <Link to="/" className="text-xl tracking-tight font-bold text-orange-500">VirtualR</Link>
            <h2 className="mt-6 text-3xl font-extrabold text-white">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Or{" "}
              <Link to="/signup" className="font-medium text-orange-500 hover:text-orange-600">
                start your 14-day free trial
              </Link>
            </p>
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-300 mb-1">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border border-neutral-700 bg-neutral-800/60 py-2 px-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border border-neutral-700 bg-neutral-800/60 py-2 px-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded bg-neutral-800 border-neutral-700 text-orange-600 focus:ring-orange-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/reset-password" className="font-medium text-orange-500 hover:text-orange-600">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center rounded-md py-2 px-4 bg-gradient-to-r from-orange-500 to-orange-800 text-white font-medium hover:from-orange-600 hover:to-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
            
            <div className="text-center mt-4">
              <span className="text-gray-400">Don't have an account? </span>
              <Link to="/signup" className="font-medium text-orange-500 hover:text-orange-600">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right side - Image (50%) */}
      <div className="hidden md:block w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${codeImage})` }}>
        <div className="h-full w-full bg-black/40 flex items-center justify-center">
          <div className="text-center px-8">
            <h2 className="text-4xl font-bold text-white mb-4">Experience Virtual Reality</h2>
            <p className="text-xl text-gray-200">Step into the future with VirtualR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;