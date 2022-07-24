import React, { useEffect, useState } from "react";
import "./stopwatch.css";

export const Stopwatch = () => {
  const [stophour, setstophour] = useState(0);
  const [stopmin, setstopmin] = useState(0);
  const [stopsec, setstopsec] = useState(0);

  const [stop, setstop] = useState(true);

  const handlestart = () => {
    setstop(() => false);
  };

  const handlestop = (action) => {
    if (action == "restart") {
      setstop(() => true);
      setstophour(() => 0);
      setstopmin(() => 0);
      setstopsec(() => 0);
    } else {
      setstop(() => true);
    }
  };

  useEffect(() => {
    const stopwatchTimer = setInterval(() => {
      if (stop == false) {
        setstopsec((prev) => {
          if (stopsec == 59) {
            setstopmin((m) => m + 1);
            return 0;
          }
          return prev + 1;
        });
      }
    }, 1000);
    return () => {
      clearInterval(stopwatchTimer);
    };
  });

  useEffect(() => {
    if (stopmin == 59) {
      setstopmin(() => 0);
      setstophour((prev) => {
        if (prev == 24) {
          return 0;
        }
        return prev + 1;
      });
    }
  }, [stopmin]);

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
          <button onClick={() => handlestop("restart")}>RESTART</button>
          <button onClick={() => handlestop("stop")}>STOP</button>
        </div>
      )}
    </div>
  );
};
