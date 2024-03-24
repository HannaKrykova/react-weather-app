import React, { useState } from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      coordinates: response.data.coordinates,
    });
  }

  function search() {
    const apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="form-inline search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control mr-sm-2 search-input"
                type="search"
                placeholder="Enter a city.."
                aria-label="Search"
                autoFocus="on"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <div className="spinnerContainer">
        <TailSpin
          visible={true}
          height="60"
          width="60"
          color="#964d7d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
}
