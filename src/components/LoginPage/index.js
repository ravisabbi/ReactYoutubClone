import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import SignUp from "../SignUp";
import "./index.css";

const LoginPage = () => {
  const [showPassword, setshowPassword] = useState(true);
  const navigate = useNavigate();
  const checkBoxChange = () => {
    //setshowPassword((prevState) => !prevState);
    setshowPassword(!showPassword);
  };
  //console.log(showPassword);
  return (
    <div className="bg-container">
      <div className="card-white">
        <div className="image-container">
          <div className="blur-container">
            {/* <h1 className="heading-login"></h1> */}
          </div>
        </div>

        <div className="signup-container">
          <div className="signup-card">
            <form>
              <h1 className="signup-heading">Log In</h1>

              <label className="signup-para">Email</label>

              <input
                placeholder="Enter Your Email"
                type="text"
                className="input-bar"
              />
              <br />
              <label className="signup-para">Password</label>
              <input
                placeholder="Enter Your Password"
                type={showPassword ? "password" : "text"}
                className="input-bar"
              />
              <br />

              <div>
                <input
                  onChange={checkBoxChange}
                  type="checkbox"
                  id="check-box"
                />
                <label htmlFor="check-box">Show Password</label>
              </div>
              <input type="submit" value="submit" className="submit-button" />
              <div className="or-container">or </div>
            </form>
            <div className="google-button">
              <Link className="linkSignUp" to="/SignUp">
                <div className="g-div">
                  <p className="p-google">SignUp Here</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
