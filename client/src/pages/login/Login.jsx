import { useState } from "react";
import "./login.scss";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
  return (
    <div className="login">
        <div className="top">
            <div className="wrapper">
            <img className="logo" 
            src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-symbol-500x157.jpg" 
            alt="" 
            />
        </div>
        </div>
        <div className="container">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email or phone number" onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                <button className="loginButton">Sign In</button>
                <span>New to Netflix? <b>Sign up now.</b></span>
                <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a 
                    bot. <b>Learn more</b>.
                </small>
            </form>
        </div>
    </div>
  );
}
