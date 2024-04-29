import { useEffect, useState } from "react";
import getWeatherInfo from "../helpers/apiWeather";
import Weather from "../models/weather";
import windyIcon from "../assets/windy.svg";
import weatherApiIcon from "../assets/weatherapi_logo.png";
import "./WeatherCard.css";

function WeatherCard() {
  const [weather, setWeather] = useState<Weather>();

  useEffect(() => {
    getWeatherInfo()
      .then((data) => {
        setWeather(data);
      })
      .catch((error) => console.error(`ERROR: ${error}`));
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="header box">
          <p>
            Ubicación: <span>{weather?.locationName}</span>
          </p>
          <p>
            Pais: <span>{weather?.locationCountry}</span>
          </p>
        </div>

        <div className="body-weather box">
          <div>
            <p>
              {weather?.currentTempC} °C / {weather?.currentTempF} °F
            </p>
            <p>{weather?.currentCondition}</p>
          </div>
          <div>
            <img src={weather?.currentConditionIcon} alt="..." />
          </div>
        </div>

        <div className="body-windy box">
          <div>
            <img src={windyIcon} alt="..." width={50} />
          </div>
          <div>
            <p>m/h: {weather?.currentWindKPH}</p>
            <p>k/h: {weather?.currentWindMPH}</p>
            <p>Dirección: {weather?.currentWindDir}</p>
          </div>
        </div>

        <div className="footer box">
          <p>
            Humedad: <span>{weather?.currentHumidity}</span>
          </p>
          <p>
            Nublado: <span>{weather?.currentIsCloudy === 1 ? "Si" : "No"}</span>
          </p>
        </div>
      </div>
      <div className="info">
        <a href="https://www.weatherapi.com/" target="_blank">
          Powered by <img src={weatherApiIcon} alt="..." />
        </a>
      </div>
    </div>
  );
}

export default WeatherCard;
