import React, { useState } from "react";

import { useLocation } from "react-router-dom";

import Footer from "./footer";

import axios from "axios";


export default function Signup() {
  const location = useLocation();
  const EmailID = location.state?.email;

  const [click, setClick] = useState(false);
  function openDiv() {
    setClick(!click);
  }
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [Emailaddress, setEmailAddress] = useState("");
  const [Password1, setPassword1] = useState("");
  const [Password2, setPassword2] = useState("");

  const handleSubmit = async function (event) {
    event.preventDefault();
    setEmailAddress(EmailID);


    if (Password1 !== Password2) {
      alert('Password Incorrect');
    } else {
      try {
        const response = await axios.post("http://localhost:8082", {
          fname,
          lname,
          Password2,
          Emailaddress:EmailID
        });
        console.log(response.data);
        setfname("");
        setlname("");
 
        setPassword1("");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <React.Fragment>
      <div className="signin">
        <nav className="navbar navbar-brand navbar-expand-lg ">
          <h1 className="">NetFlix</h1>
        </nav>

        <div className="container signcontain">
          <div className="row">
            <h2 className="signhead">Sign up</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              required
              value={EmailID}
              placeholder="Email Address"
              size="20"
              readOnly
            />

            <div className="row email ">
              <input
                type="text"
                required
                value={fname}
                onChange={function (event) {
                  setfname(event.target.value);
                }}
                placeholder="First Name"
                size="20"
              />

              <input
                type="text"
                required
                value={lname}
                onChange={function (event) {
                  setlname(event.target.value);
                }}
                placeholder="Last Name"
                size="20"
              />
            </div>
            <div className="row email ">
              <input
                type="password"
                id="Password1"
                value={Password1}
                onChange={(event) => {
                  setPassword1(event.target.value);
                }}
                required
                placeholder="Enter Password"
                size="40"
              />
            </div>
            <div className="row email ">
              <input
                type="password"
                id="password2"
                required
                value={Password2}
                onChange={(event) => {
                  setPassword2(event.target.value);
                }}
                placeholder="Re enter password"
                size="40"
              />
            </div>
            <div className="row email">
              <button type="submit"  className="btn-lg btn-danger">
                Sign up
              </button>
            </div>
          </form>
          <div className="row email">
            <div className="col">
              {" "}
              <input type="checkbox" value="lsRememberMe" id="rememberMe" />
              <label>Remember me</label>
            </div>
            <div className="col">
              {" "}
              <p className="needhelp">Need help?</p>
            </div>
          </div>

          <div className="row newto">
            <p className="googlecap">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <span className="link" onClick={openDiv}>
                Learn more.
              </span>{" "}
            </p>
            {click && (
              <p className="googlecap">
                The information collected by Google reCAPTCHA is subject to the
                Google{" "}
                <a className="link" href="https://policies.google.com/privacy">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a className="link" href="https://policies.google.com/terms">
                  Terms of Service
                </a>
                , and is used for providing, maintaining, and improving the
                reCAPTCHA service and for general security purposes (it is not
                used for personalized advertising by Google).
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
