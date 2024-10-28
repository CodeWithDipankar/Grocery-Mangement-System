import React, { useState } from 'react';
import '../style/css/forgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate sending a reset link
      setMessage(`A password reset link has been sent to ${email}`);
      setEmail(''); // Reset input field after submission
    } else {
      setMessage('Please enter a valid email');
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2>Forgot Your Password?</h2>
        <p>Enter your email address and we will send you a link to reset your password.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Reset Link</button>
        </form>
        {message && <p className="message">{message}</p>}
        <div className="extra-links">
          <a href="/login">Back to Login</a>
          <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
