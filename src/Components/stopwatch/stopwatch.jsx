import React, { useState } from "react";
import "./stopwatch.css";

export const Stopwatch = () => {
  const [stophour, setstophour] = useState("00");
  const [stopmin, setstopmin] = useState("00");
  const [stopsec, setstopsec] = useState("00");

  const [stop, setstop] = useState(true);

  const handlestart = () => {
    setstop(() => false);
  };

  const handlestop = (action) => {
    setstop(() => true);
  };
  return (
    <div id="stopwatch">
      <h1>Stopwatch</h1>
      <div id="stopwatch-time-display">
        <p>
          <span>{stophour + " "} </span> : <span>{stopmin + " "}</span> :{" "}
          <span>{stopsec + " "}</span>
        </p>
      </div>
      {stop ? (
        <button onClick={() => handlestart()}>START</button>
      ) : (
        <div>
          <button onClick={() => handlestop(stop)}>RESTART</button>
          <button onClick={() => handlestop(stop)}>STOP</button>
        </div>
      )}
    </div>
  );
};
