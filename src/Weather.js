import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>Kyiv</h1>
      <ul className="forecast-details mt-3">
        <li>Sunday 18:00</li>
        <li>Rain</li>
      </ul>
      <div className="row mt-4 mb-4">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
              alt="rainy"
            />
            <span className="temperature">9</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 90%</li>
            <li>Humidity: 90%</li>
            <li>Wind: 5km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
