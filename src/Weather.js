import React, { useState } from "react";
import axios from "axios";
import Units from "./Units";
import Day from "./Day";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    const date = new Date(response.data.time * 1000);
    setWeatherData({
      temperature: response.data.temperature.current,
      country: response.data.country,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      date: date,
      ready: true, // Set ready to true once data is fetched
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios
      .get(url)
      .then(handleResponse)
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setWeatherData({ ready: false }); // Set ready state to false on error
      });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="Weather container col-9">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Type City"
              autoFocus="on"
              onChange={handleCityChange}
              className="form-control col-md-9"
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-primary col-md-3"
            />
          </form>
          <h1>{city}</h1>
          <div className="row">
            <p className="cityTemp col-6">
              <strong>
                <Units initialTemperature={weatherData.temperature} />
              </strong>
            </p>

            <div className="col-6">
              <p>
                <img src={weatherData.icon} alt="Weather Icon" />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>
                <strong>
                  Country:{""}
                  {weatherData.country}
                </strong>
              </p>
              <p>
                {" "}
                <strong>Humidity:</strong> {""}
                {weatherData.humidity}
              </p>
              <p>
                <strong>Wind:</strong> {Math.round(weatherData.wind)}
                {""} km/h
              </p>
            </div>
            <div className="col-6">
              <p>
                {" "}
                <strong>Description:</strong>
                {""}
                {weatherData.description}
              </p>
              <p>
                <strong>Day:</strong>
                <Day date={weatherData.date} />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    if (!city) {
      return <div>Enter a city to search</div>;
    } else {
      search();
      return <div>Loading...</div>;
    }
  }
}
