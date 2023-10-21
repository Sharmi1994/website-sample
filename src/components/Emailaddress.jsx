import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Inputinemail from "./Inputinemail.jsx";

function Emailaddress() {
  const [email, setEmail] = useState("");
  let navigate = useNavigate();
  function routeChange() {
    navigate("/Signup", { state: { email:email} });
  }

  function handleInput(inputValues) {
    setEmail(inputValues);

  }

  return (
    <div>
      <h2 className="subsentence">
        Ready to watch? Enter your email to create or restart your membership.
      </h2>

      <form onSubmit={routeChange}>
        <div className="input-group mb-3">
          <Inputinemail onSubmit={handleInput} />

          <button type="submit" className="btn btn-lg btn-danger">
            Get Started {">"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Emailaddress;
