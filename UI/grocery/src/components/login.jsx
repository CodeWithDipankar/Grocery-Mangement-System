import { useEffect, useState } from 'react';
import { Tooltip } from 'bootstrap';
import '../css/override.css'; // Make sure this file includes any necessary styles

function Login({ isDarkMode }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl, { html: true });
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }
    setError('');
    // Handle login logic here
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className={`card shadow-sm ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`} style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body px-5">
          <h2 className="card-title text-center mt-1 fw-normal">Login</h2>
          <hr className="full-width-divider mb-4" />
          
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email / Username</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Example: john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="<div class='tooltip-content'>
                          <ul>
                            <li>Your password must be 8-20 characters long</li>
                            <li>Contain letters and numbers</li>
                            <li>Must not contain spaces, special characters, or emoji</li>
                          </ul>
                        </div>"
              />
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="submit" className="btn btn-primary w-100 mt-4">Submit</button>
            </div>
          </form>

          <hr className="full-width-divider mt-4" />
          <div className="text-center fs-6 footer">
            <p>Forgot password? <a href="#">Click here</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
