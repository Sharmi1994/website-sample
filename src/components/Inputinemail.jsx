import React, { useState } from "react";



function Inputinemail({onSubmit}) {


  const [inputValues, setInputValue] = useState("");

  function onInputChange(event) {
    setInputValue(event.target.value);
    onSubmit(inputValues);
  }

  return (
    <React.Fragment>
      <input
        type="email"
        required
        value={inputValues}
        onChange={onInputChange}
        className="form-control"
        placeholder="Email address"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
     
    </React.Fragment>
  );
}

export default Inputinemail;
