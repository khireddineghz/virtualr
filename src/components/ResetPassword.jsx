import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email) {
      // This would normally connect to your backend to send a reset email
      setMessage("If an account exists with this email, you will receive password reset instructions.");
      setStatus("success");
      
      // In a real application, we'd wait for API response
      // For demo purposes, we'll just simulate a successful request
      setTimeout(() => {
        // navigate("/login");
      }, 3000);
    } else {
      setMessage("Please enter your email address");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900">
      <div className="max-w-md w-full p-8 rounded-lg border border-neutral-700/80 backdrop-blur-sm bg-neutral-900/80">
        <div className="text-center mb-10">
          <Link to="/" className="text-xl font-bold text-orange-500">VirtualR</Link>
          <h2 className="mt-6 text-3xl font-extrabold text-white">Reset your password</h2>
          <p className="mt-2 text-sm text-gray-400">
            Enter your email address and we'll send you instructions to reset your password.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
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
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          {message && (
            <div className={`text-sm text-center ${status === "success" ? "text-green-500" : "text-red-500"}`}>
              {message}
            </div>
          )}
          
          <div>
            <button
              type="submit"
              className="w-full flex justify-center rounded-md py-2 px-4 bg-gradient-to-r from-orange-500 to-orange-800 text-white font-medium hover:from-orange-600 hover:to-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Send reset instructions
            </button>
          </div>
        </form>
        
        <div className="mt-8 text-center">
          <div className="text-sm">
            <Link to="/login" className="font-medium text-orange-500 hover:text-orange-600">
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;