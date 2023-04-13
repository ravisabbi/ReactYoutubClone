import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import "./index.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [userName, setuserName] = useState("");
  const [showPassword, setshowPassword] = useState(true);
  const [password, setpassword] = useState("");
  const [conformpassword, setconformpassword] = useState("");

  const checkBoxChange = () => {
    setshowPassword(!showPassword);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    const userDetails = { name,userName, password };
    const id = uuidv4();
    // console.log(id);
    userDetails.id = id;
    // console.log(userDetails);
    axios.post("/user/", userDetails).then((response) => {
      console.log(response);
    });
  };

  // console.log(userName);
  // console.log(password);
  // console.log(conformpassword);

  return (
    <div className="bg-container">
      <div className="card-white">
        <div className="image-container">
          <div className=""></div>
        </div>

        <div className="signup-container">
          <form className="signup-card" onSubmit={onSubmitForm}>
            <h1 className="signup-heading">Sign Up</h1>

            <label className="signup-para">Name</label>
            <input
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter Name"
              type="text"
              className="input-bar"
            />
            <br />

            <label className="signup-para">Username</label>

            <input
              onChange={(event) => setuserName(event.target.value)}
              placeholder="Enter Your UserName"
              type="text"
              className="input-bar"
            />

            <br />
            <label className="signup-para">Password</label>
            <input
              onChange={(event) => setpassword(event.target.value)}
              placeholder="Enter Your Password"
              type={showPassword ? "password" : "text"}
              className="input-bar"
            />

            <br />

            <label className="signup-para">Conform Password</label>
            <input
              onChange={(event) => setconformpassword(event.target.value)}
              placeholder="Enter Your Password"
              type={showPassword ? "password" : "text"}
              className="input-bar"
            />

            <div>
              <input onChange={checkBoxChange} type="checkbox" id="check-box" />
              <label for="check-box">Show Password</label>
            </div>
            <p className="passwordErrorMsg">
              {password !== conformpassword ? "Please enter same password" : ""}
            </p>
            <p>
              {!(password.length > 4 && password <= 8)
                ? "password must be 4 to 8"
                : ""}
            </p>
            <input type="submit" value="submit" className="submit-button" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
