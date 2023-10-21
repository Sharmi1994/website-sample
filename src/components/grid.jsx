import React from "react";

function Grid() {
  return (
    <div className="container ">
    <div className="row diagonalbox">
      <div className="col-3">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
          alt="img.png"
          width="40"
          height="60"
        />
      </div>
      <div className="col-6">
        <p className="Strange">Stranger Things</p>

        <p className="download">Downloading...</p>
      </div>
      <div className="col-3">
        <img
          src="/images/download-icon-gif-3.jpeg"
          alt="img.png"
          width="40"
          height="60"
        />
      </div>
    </div>
  </div>  );
}

export default Grid;
