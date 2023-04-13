import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

// import SignUp from "../SignUp";
import "./index.css";

const LoginPage = () => {
  const [showPassword, setshowPassword] = useState(true);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [usernameErrMsg, setUserNameErrMsg] = useState(false);
  const [passwordErrMsg, setPasswordErrMsg] = useState(false);
  const [showSubmitError, setShowSubmitError] = useState("");
  
  const navigate = useNavigate();


  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  
  const onChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  const onSubmitSuccess = (jwtToken) => {

    Cookies.set("jwt_token", jwtToken, { expires: 30 });
     navigate("/",{replace:true})
  };

  const onSubmitFailure = (errorMsg) => {
    setShowSubmitError(errorMsg);
  };

   
  const checkBoxChange = () => {
    //setshowPassword((prevState) => !prevState);
    setshowPassword(!showPassword);
  };


  const onSubmitForm = async(event) => {
    event.preventDefault();
    const userDetails = { username, password };
    try{
     const response = await axios.post("/login/", userDetails);
    //  .then((response) => {
    //   console.log(response);
    // });
    const  data = await response.json()
    console.log( data);
    if(response.ok) {
      onSubmitSuccess(data.jwt_token);
    }
  }
  catch(e){
    console.log(e);
    onSubmitFailure(e);
  }
     
  };

  const validateUsername = (event) => {
    if (event.target.value === "") {
      setUserNameErrMsg(true);
    } else {
      setUserNameErrMsg(false);
    }
  };

  const validatePassword = (event) => {
    if (event.target.value === "") {
      setPasswordErrMsg(true);
    } else {
      setPasswordErrMsg(false);
    }
  };

  // const jwtToken = Cookies.get('jwt_token')
  //   if (jwtToken !== undefined) {
  //     return <Redirect to="/" />
  //   }

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
            <form onSubmit={onSubmitForm}>
              <h1 className="signup-heading">Log In</h1>
              <label className="signup-para">Username</label>
              <input
                placeholder="ENTER USERNAME"
                type="text"
                value={username}
                className="input-bar"
                onChange={onChangeUserName}
                onBlur={validateUsername}
              />
              {usernameErrMsg && <p className="error-msg">*Required</p>}
              <br />
              <label className="signup-para">Password</label>
              <input
                placeholder="ENTER PASSWORD"
                type={showPassword ? "password" : "text"}
                className="input-bar"
                value={password}
                onChange={onChangePassword}
                onBlur={validatePassword}
              />
              {passwordErrMsg && <p className="error-msg">*Required</p>}
              <br />

              <div>
                <input
                  onChange={checkBoxChange}
                  type="checkbox"
                  id="check-box"
                />
                <label htmlFor="check-box">Show Password</label>
              </div>
              <button className="submit-button" type="submit">
                Submit
              </button>
              {/* <button type="submit" value="submit" className="submit-button" /> */}
              <div className="or-container">or </div>
            </form>
            <div className="google-button">
              <Link className="linkSignUp" to="/signUp">
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
