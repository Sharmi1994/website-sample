import React, { useState } from "react";


import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

function Frequentques(props) {
  const [toggle, settoggle] = useState(false);

  function expandable() {
    settoggle(!toggle);
  }

  return (

    <div className="container">
      <div onClick={expandable} className="myDiv">
        {props.title}

        {toggle ? (
          <FaMinusCircle className="fontawesome" />
        ) : (
          <FaPlusCircle className="fontawesome" />
        )}
      </div>
      {toggle && (
        <div className="expand">
          <span>
            {props.desc1}
            <br></br>
            {props.desc2}
          </span>
        </div>
      )}
      
    </div>
  
  );
}

export default Frequentques;
