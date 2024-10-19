// import './login.css';

// function Login() {
//     return (
//         <div className="container">
//             <div className="container-header">Login</div>
//             <hr class="divider"></hr>
//             <div className="container-body">
//                 <label htmlFor="email" className="container-label">Username</label>
//                 <input type="text" id="email" className="container-input" placeholder="Example: jane@google.com" />
//                 <label htmlFor="password" className="container-label">Password</label>
//                 <input type="password" id="password" className="container-input" placeholder="Password" />
//                 <div className="btn">Submit</div>
//             </div>
//             <hr class="divider"></hr>
//             <div className="container-footer">
//                 <p>Forgot password? <a href="#">Click here</a></p>
//             </div>
//         </div>
        
//     );
// }

// export default Login;



import { useEffect } from 'react';
import { Tooltip, Toast, Popover } from 'bootstrap';

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
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Login</h2>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
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
                title="<ul>
                         <li>Your password must be 8-20 characters long</li>
                         <li>Contain letters and numbers</li>
                         <li>Must not contain spaces, special characters, or emoji</li>
                       </ul>"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-4">Submit</button>
            <hr />
            <div className="text-center">
              <p>Forgot password? <a href="#">Click here</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;