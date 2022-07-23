import React, { useEffect, useState } from "react";
import "./watch.css";

export const Watch = () => {
  const [hour, sethour] = useState("");
  const [minute, setminute] = useState("");
  const [second, setsecond] = useState("");
  const [session, setsession] = useState("AM");

  function getTime() {
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      setsession(() => "PM");
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    sethour(() => h);
    setminute(() => m);
    setsecond(() => s);

    setTimeout(() => {
      getTime();
    }, 1000);
  }

  useEffect(() => {
    getTime();
  }, []);

  return (
    <div>
      <h1>Watch</h1>
      <div>
        <div>{`${hour} : `}</div>
        <div>{`${minute} : `}</div>
        <div>{`${second} `}</div>
        <div>{session}</div>
      </div>
    </div>
  );
};
