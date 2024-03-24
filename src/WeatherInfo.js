import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="mt-2">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="row mt-4 mb-3 forecast">
        <div className="col-6 p-0 iconTemperature">
          <div className="">
            <WeatherIcon code={props.data.icon} size={64} />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6 weatherDescription">
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
