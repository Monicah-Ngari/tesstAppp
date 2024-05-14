import React, { useState } from "react";

export default function Units({ initialTemperature }) {
  const [temperature, setTemperature] = useState(initialTemperature);

  const toggleUnit = (selectedUnit) => {
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
        <a href="/" onClick={() => toggleUnit("C")}>
          °C
        </a>
        <span>|</span>
        <a href="/" onClick={() => toggleUnit("F")}>
          °F
        </a>
      </span>
    </div>
  );
}
