import React from "react";
import { formatToLocalTime } from "../services/weatherService";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p id="myMainFont" className="text-4xl text-pink-500 font-semibold">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
