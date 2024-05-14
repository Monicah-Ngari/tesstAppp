import React from "react";

const Day = ({ date }) => {
  // Function to get the day of the week from the date
  const getDayOfWeek = (date) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[date.getDay()];
  };

  return <span>{getDayOfWeek(date)}</span>;
};

export default Day;
