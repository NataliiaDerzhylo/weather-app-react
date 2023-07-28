import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function displayResult(response) {
    setLoaded(true);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      description: response.data.weather[0].description,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2980ff43226d67e53abfcdb6d457dcc8&units=metric`;
    axios.get(url).then(displayResult);
  }

  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <form id="search-form" className="mb-" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Type a city"
                className="form-control"
                id="city-input"
                autoComplete="off"
                value={city}
                onChange={updateCity}
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
        {loaded && weatherData && (
          <div className="weather-details">
            <div className="overview">
              <div className="row">
                <div className="col-8">
                  <h1>{city}</h1>
                  <p>{weatherData.description}</p>
                  <p>Temperature: {weatherData.temperature} °C</p>
                  <p>Humidity: {weatherData.humidity} %</p>
                  <p>Wind: {weatherData.wind} km/h</p>
                </div>
                <div className="col-4">
                  <img
                    src={weatherData.icon}
                    alt={weatherData.description}
                    className="weather-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        <footer>
          <small>
            <span className="name">by Nataliia Derzhylo</span>
          </small>
        </footer>
      </div>
    </div>
  );
}
