
import './login.css'

function Login(){
    return(

        <div class = "container">
            <div class = "container-header"> Login </div>
            <div class = "container-body">
                <label htmlFor="email" id = "container-label"> Username/Email </label>
                {/* <span id="user-email-hint" class="input-hint"></span> */}
                <input type="text" id = "container-input" placeholder="Example: jane@sample.com" />
            </div>
        </div>

    )
}

export default Login;