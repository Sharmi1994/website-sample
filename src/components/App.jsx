import React from "react";

import Navbar from "./Navbar";

import Styling from "./Styling";

import details from "../details";

import Frequentques from "./Frequentques";

import Faq from "../FAQ";

import Emailaddress from "./Emailaddress";

import Footer from "./footer";


function detailsImport(detail) {
  return (
    <Styling
      key={detail.id}
      title={detail.Topic}
      image={detail.imgURL}
      position={detail.imagePosition}
      description={detail.Desc}
      Additionalgrid={detail.Additional}
    />
  );
}

function freqquesdetail(freqques) {
  return (
    <Frequentques
      key={freqques.id}
      title={freqques.Topic}
      desc1={freqques.Desc1}
      desc2={freqques.Desc2}
    />
  );
}

function App() {
  return (
    <div>
      <Navbar />
      {details.map(detailsImport)}
      <h1 className="FAQ">Frequently Asked Questions</h1>
      {Faq.map(freqquesdetail)}
      <Emailaddress  />
      <hr />
     <Footer/>
 
    </div>
  );
}

export default App;
