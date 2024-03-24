import React from "react";

import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function dayTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function nightTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day mb-2">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={40} />
      <div className="WeatherForecast-temperature mt-2">
        <span className="WeatherForecast-temperature-day">
          {dayTemperature()}
        </span>
        <span className="WeatherForecast-temperature-night">
          {nightTemperature()}
        </span>
      </div>
    </div>
  );
}
