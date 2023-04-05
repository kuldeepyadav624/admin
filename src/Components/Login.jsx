import React, { useState } from "react";
import "./Newapp.css";
import { useNavigate } from "react-router-dom";
import backhroundImage from "../bg.jpg"
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const submitvalue = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    //console.log(data);

    if (email === "ykuldeep624@gmail.com" && password === "yadav123") {
      sessionStorage.setItem("userdata", JSON.stringify(data));
      navigate("/admin");
    } else {
      setError("invalid credentials");
    }
  };
  return (
    
  <section className = "body" >

      < div style={{ color: "red" }}>
        {error ? <span>{error}</span> : null}
      </div >
  <div className="background">

    <div id="login-modal" >
      <div style={{ color: "red" }}>{error ? <span>{error}</span> : null}</div>
      <div className="login-background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="myform">
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          name="userName"
          id="userName"
          className="myinput"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="pwd"
          className="myinput"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button onClick={submitvalue} className = "mybutton" >Log In</button>
        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>

  </div>

  </div>

      
  </section>
    
    
  );
}


export default Login;
