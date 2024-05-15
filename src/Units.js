import React, { useState } from "react";

export default function Units({ initialTemperature }) {
  const [units, setUnits] = useState("C");

  const getTemperature = () => {
    if (units === "C") {
      return Math.round(initialTemperature);
    } else {
      return Math.round((initialTemperature * 9) / 5 + 32);
    }
  };

  const toggleUnit = (event) => {
    event.preventDefault(); // Prevent the default behavior of the links
    if (units === "C") {
      setUnits("F");
    } else {
      // Convert to Fahrenheit if Fahrenheit is selected
      setUnits("C");
    }
  };

  return (
    <div className="Units">
      <span className="currentTemp mb-0">{getTemperature()}</span>
      <span className="units">
        <a href="/" onClick={(event) => toggleUnit(event)}>
          °C
        </a>
        <span>|</span>
        <a href="/" onClick={(event) => toggleUnit(event)}>
          °F
        </a>
      </span>
    </div>
  );
}
