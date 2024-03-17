import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
      city: response.data.city,
      date: "Sunday 18:00",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="form-inline search-form">
          <div className="row">
            <div className="col-9">
              <input
                className="form-control mr-sm-2 search-input"
                type="search"
                placeholder="Enter a city.."
                aria-label="Search"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <button
                className="btn search-submit my-2 my-sm-0 w-100"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul className="mt-3">
          <li>{weatherData.date}</li>
        </ul>
        <div className="row mt-4 mb-4">
          <div className="col-6">
            <div className="clearfix">
              <img src={weatherData.icon} alt={weatherData.description} />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li className="text-capitalize">{weatherData.description}</li>
              <li>
                Humidity:
                {weatherData.humidity}%
              </li>
              <li>
                Wind:
                {weatherData.wind}km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
    let city = "Kyiv";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&unit=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
