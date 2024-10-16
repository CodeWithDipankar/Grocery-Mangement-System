
import './login.css'

function Login(){
    return(

        <div class = "container">
            <div class = "container-header"> Login </div>
            <div class = "container-body">
                <label htmlFor="email" id = "container-label"> Username/Email </label>
                <span id="user-email-hint" class="input-hint">Example: jane@sample.com</span>
                <input type="text" id = "container-input" placeholder="Enter Username/Email" />
            </div>
        </div>

    )
}

export default Login;