import logo from "./logo.png";
import "./App.css";

import React from "react";

export default function () {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form id="search-form" className="mb-">
            <div className="row">
              <div className="col-10">
                <input
                  type="search"
                  placeholder="Type a city"
                  className="form-control"
                  id="city-input"
                  autoComplete="off"
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-primary w-100"
                  id="search-button"
                />
              </div>
            </div>
          </form>
          <div className="overview">
            <div className="row">
              <div className="col-8"></div>
              <div className="col-4">
                <button className="button-current">Current Location</button>
              </div>
            </div>
            <ul>
              <li id="date"></li>
              <li id="description"></li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="d-flex weather-temperature">
                <div>
                  <strong id="temperature"></strong>
                  <span className="units">°C</span>
                </div>
              </div>
            </div>

            <div className="col-6">
              <ul>
                <li>
                  Humidity: <span id="humidity"></span>%
                </li>
                <li>
                  Wind:<span id="wind"></span> km/h
                </li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast" id="forecast"></div>
        </div>
        <footer>
          <small>
            <span className="name">by Nataliia Derzhylo</span>
          </small>
        </footer>
      </div>
    </div>
  );
}
