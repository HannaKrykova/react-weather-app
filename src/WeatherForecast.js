import React from "react";
import axios from "axios";

import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "dff5c692192605ee5ed7f95b423ae857";
  let latitude = props.coordinates.latitude;
  let longitude = props.coordinates.longitude;
  let units = "metric";
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Sun</div>
          <WeatherIcon code="clear-sky-day" size={40} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-day">19°</span>
            <span className="WeatherForecast-temperature-night">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
