
import './login.css'

function Login(){
    return(

        <div class = "container">
            <div class = "container-header"> Login </div>
            <hr />
            <div class = "container-body">
                <label htmlFor="email" id = "container-label"> Username/Email </label>
                <input type="text" id = "container-input" placeholder="Example: jane@sample.com" />
                <label htmlFor="password" id = "container-label"> Password </label>
                <input type="password" id = "container-input" placeholder="Password" />
            </div>
        </div>

    )
}

export default Login;