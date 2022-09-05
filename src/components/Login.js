import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
export default function Login(props) {
  const {
    email,
    password,
    setEmail,
    setPassword,
    handelLogin,
    emailError,
    passwordError,
  } = props;
  return (
    <div>
      <div className="alert alert-warning warning text-center">
        This is a warning alert ! Only website owners have acess to check Admins
        dashbord ! if you don't have an admin account please back to home page
        <br></br>
        <Link to="/">
          <p className="text-center">Back to home page</p>
        </Link>
      </div>
      <section className="login">
        <div className="loginContainer">
          <h3>Login</h3>
          <label>Email</label>
          <input
            type="text"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errorMsg">{emailError}</p>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMsg">{passwordError}</p>
          <div className="btnContainer">
            <button  className="loginBtn" onClick={handelLogin}>Login</button>
          </div>
        </div>
      </section>
    </div>
  );
}
