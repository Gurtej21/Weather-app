import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
       
       <a>  Developed by Gurtej singh</a>
       
       
        {/* <a href="https://www.htmlhints.com/article/how-to-create-toggle-switch/93">
          
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="">
          Gurtej singh
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://www.htmlhints.com/">
          HTML HINTS
        </a> */}
      </div>
    </React.Fragment>
  );
}

export default App;
