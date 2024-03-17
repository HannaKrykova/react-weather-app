import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      Weather App
      <footer>
        This project was created by {""}
        <a
          href="https://github.com/HannaKrykova"
          target="_blank"
          rel="noreferrer"
        >
          Hanna Krykova
        </a>
        {""} and it's {""}
        <a
          href="https://github.com/HannaKrykova/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
