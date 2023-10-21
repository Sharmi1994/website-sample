import React from "react";

import Language from "./language";

function Footer(){

    return(
    <div className="container" style={{marginTop:"30px"}}>
    <div className="footer">
      <p>Questions? Call</p>
      <a href="https://www.netflix.com/ky/"> 1 (408) 329-9526 (USA)</a>
    </div>
    <div className="grid">
      <a href="https://www.netflix.com/ky/"><span>FAQ</span></a>
      <a href="https://www.netflix.com/ky/"><span>Help Center</span></a>
      <a href="https://www.netflix.com/ky/"><span>Account</span></a>
      <a href="https://www.netflix.com/ky/"><span>Media Center</span></a>
      <a href="https://www.netflix.com/ky/"><span>Investor Relations</span></a>
      <a href="https://www.netflix.com/ky/"><span>Jobs</span></a>
      <a href="https://www.netflix.com/ky/"><span>Ways to Watch</span></a>
      <a href="https://www.netflix.com/ky/"><span>Terms of Use</span></a>
      <a href="https://www.netflix.com/ky/"><span>Privacy</span></a>
      <a href="https://www.netflix.com/ky/"><span>Cookies Preferences</span></a>
      <a href="https://www.netflix.com/ky/"><span>Corporate Information</span></a>
      <a href="https://www.netflix.com/ky/"><span>Contact Us</span></a>
      <a href="https://www.netflix.com/ky/"><span>Speed Test</span></a>
      <a href="https://www.netflix.com/ky/"><span>Legal Notices</span></a>
      <a href="https://www.netflix.com/ky/"><span>Only on Netflix</span></a>
    </div>
    <Language />
    <p className="end">Netflix Cayman Islands</p>
  </div>
);}

export default Footer;