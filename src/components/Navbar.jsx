import React from "react";

import Emailaddress from "./Emailaddress";

import Language from "./language";

import { useNavigate } from "react-router-dom";

function Navbar() {

  let navigate=useNavigate();
  function routeChange(){

    let path="/Signin";
    navigate(path);

  }
  return (
    <React.Fragment>
    <div className= "title">
      <nav className="navbar">
        <div className="navbar-brand">NetFlix</div>
        <div>
       <Language />
          <button type="button" onClick={routeChange}className="btn btn-danger">
            Signin
          </button>
        </div>
      </nav>
      <div className="container customisedcontain">
        <h1 className="subtitle">Unlimited movies, TV shows, and more.</h1>
        <h2 className="subsentence1">Watch anywhere. Cancel anytime..</h2>
       <Emailaddress />
      
      </div>
   
    </div>
    <hr/>
    </React.Fragment>
    
  );
}

export default Navbar;
