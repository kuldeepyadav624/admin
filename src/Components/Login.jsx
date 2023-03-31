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
    /*<div classNameName="wrapper">
    
          <div style={{ color: "red" }}>
            {error ? <span>{error}</span> : null}
          </div>
          <div classNameName="logo">
            <img
              src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
              alt="NGO"
            />
          </div>
    
    
          <div classNameName="text-center mt-4 name">KULDEEP YADAV</div>
          <form classNameName="p-3 mt-3">
            <div classNameName="form-field d-flex align-items-center">
              <span classNameName="far fa-user"></span>
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Username"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div classNameName="form-field d-flex align-items-center">
              <span classNameName="fas fa-key"></span>
              <input
                type="password"
                name="password"
                id="pwd"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button classNameName="btn mt-3" onClick={submitvalue}>Login</button>
          </form>
          {/* <div classNameName="text-center fs-6">
            <a href="#">Forget password?</a> or <a href="#">Sign up</a>
        </div> */

<<<<<<< HEAD
   <section className = "body" >

      < div style={{ color: "red" }}>
        {error ? <span>{error}</span> : null}
      </div >
      <div className="background">
=======
    <div id="login-modal" >
      <div style={{ color: "red" }}>{error ? <span>{error}</span> : null}</div>
      <div className="login-background">
>>>>>>> bfe79d3957e04a0dc5901f74134a91ca4a8f17b5
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
<<<<<<< HEAD

      
      </section>
    
=======
    </div>
>>>>>>> bfe79d3957e04a0dc5901f74134a91ca4a8f17b5
  );
}

export default Login;
