import React from "react";

// import Container from "react-bootstrap/Container";
import Grid from "./grid";

function Styling(props) {
  return (
    <div className=" netflixknowledge">
      {props.position === "right" ? (
        <div className="container">
          <div className="row describerow">
            <div className="col describecol">
              <h1>{props.title}</h1>
              <h2>{props.description}</h2>
            </div>
            <div className="col ">
              <img className="describeimage" src={props.image} alt="img.png" />
            </div>
          </div>
          </div>
      ) : (
        <div className="container">
          <div className="row describerow">
            {props.Additionalgrid === "grid" ? (
              <div className="col backimage">
                {" "}
                <Grid />
              </div>
            ) : (
              <div className="col">
                {" "}
                <img
                  className="describeimage"
                  src={props.image}
                  alt="img.png"
                />
              </div>
            )}

            <div className="col describecol">
              <h1>{props.title}</h1>
              <h2>{props.description}</h2>
            </div>
          </div>
      </div>
      )}
      <hr />
    </div>
  );
}

export default Styling;
