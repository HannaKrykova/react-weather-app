import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="mt-3">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="row mt-4 mb-4">
        <div className="col-6">
          <div className="clearfix">
            <WeatherIcon code={props.data.icon} />
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>
              Humidity:
              {props.data.humidity}%
            </li>
            <li>
              Wind:
              {props.data.wind}km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
