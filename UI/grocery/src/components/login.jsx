import { useEffect } from 'react';
import { Tooltip } from 'bootstrap';
import '../css/override.css'; 

function Login() {
  useEffect(() => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl, { html: true }); 
    });
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-sm" style={{ maxWidth: "450px", width: "100%" }}>
        <div className="card-body px-5 ">
          <h2 className="card-title text-center mt-1 fw-normal">Login</h2>
          <hr className="full-width-divider mb-5" />
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email / Username</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Example: john@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="<ul class='custom-tooltip-list'>
                      <li>Your password must be 8-20 characters long</li>
                      <li>Contain letters and numbers</li>
                      <li>Must not contain spaces, special characters, or emoji</li>
                    </ul>"
            />
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="submit" className="btn btn-primary w-100 mt-4 mb-4">Submit</button>
          </div>
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
