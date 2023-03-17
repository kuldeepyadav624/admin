import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="wrapper">

 <div style={{ color: "red" }}>
          {error ? <span>{error}</span> : null}
        </div>
  <div className="logo">
        <img
          src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
          alt="NGO"
        />
      </div>
      

      <div className="text-center mt-4 name">KULDEEP YADAV</div>
      <form className="p-3 mt-3">
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
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
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
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
        <button className="btn mt-3" onClick={submitvalue}>Login</button>
      </form>
      {/* <div className="text-center fs-6">
        <a href="#">Forget password?</a> or <a href="#">Sign up</a>
    </div> */}
    </div>
  );
}

export default Login;
