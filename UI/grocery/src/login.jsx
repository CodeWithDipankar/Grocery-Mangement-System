import './login.css';

function Login() {
    return (
        <div className="container">
            <div className="container-header">Login</div>
            <hr class="divider"></hr>
            <div className="container-body">
                <label htmlFor="email" className="container-label">Username</label>
                <input type="text" id="email" className="container-input" placeholder="Example: jane@google.com" />
                <label htmlFor="password" className="container-label">Password</label>
                <input type="password" id="password" className="container-input" placeholder="Password" />
                <div className="btn">Submit</div>
            </div>
            <hr class="divider"></hr>
            <div className="container-footer">
                <p>Forgot password? <a href="#">Click here</a></p>
            </div>
        </div>
        
    );
}

export default Login;
