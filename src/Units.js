import React, { useState } from "react";

export default function Units({ initialTemperature }) {
  const [temperature, setTemperature] = useState(initialTemperature);

  const toggleUnit = (selectedUnit, event) => {
    event.preventDefault(); // Prevent the default behavior of the links
    if (selectedUnit === "C") {
      // Convert to Celsius if Celsius is selected
      setTemperature(((temperature - 32) * 5) / 9);
    } else {
      // Convert to Fahrenheit if Fahrenheit is selected
      setTemperature((temperature * 9) / 5 + 32);
    }
  };

  return (
    <div className="Units">
      <span className="currentTemp mb-0">{Math.round(temperature)}</span>
      <span className="units">
        <a href="/" onClick={(event) => toggleUnit("C", event)}>
          °C
        </a>
        <span>|</span>
        <a href="/" onClick={(event) => toggleUnit("F", event)}>
          °F
        </a>
      </span>
    </div>
  );
}
