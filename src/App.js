import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div classname="App">
      <div className="row">
        <div className="col">
          <div className="image">
            <img src="https://www.pngmart.com/files/12/Sun-And-Cloud-PNG-Background-Image.png"></img>
          </div>
        </div>
        <div className="col current-info">
          <span className="temp-header">
            <span className="temp-current">18 </span>
            <a href="/">℃ </a> | <a href="/">℉ </a>
          </span>
          <ul>
            <li>
              Humidity: <span> 0 </span> %
            </li>
            <li>
              Winds: <span> 0 </span> km/h
            </li>
          </ul>
        </div>
        <div className="col">
          <div className="new-information">
            <div className="current-city">
              <Search city="Edinburgh" />
            </div>
            <div className="current-time">01 Mon 20:20</div>
          </div>
        </div>
      </div>
    </div>
  );
}
