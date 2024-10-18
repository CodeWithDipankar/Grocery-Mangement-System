import './login.css';

function Login() {
    return (
        <div className="container">
            <div className="container-header">Login</div>
            <hr />
            <div className="container-body">
                <label htmlFor="email" className="container-label">Username/Email</label>
                <input type="text" id="email" className="container-input" placeholder="Example: jane@sample.com" />
                <label htmlFor="password" className="container-label">Password</label>
                <input type="password" id="password" className="container-input" placeholder="Password" />
                <button className="btn">Submit</button>
            </div>
            <div className="container-footer">
                <p>Forgot password? <a href="#">Click here</a></p>
            </div>
        </div>
    );
}

export default Login;
