import React, { useState } from "react";
import "./App.css";
import { Watch } from "./Components/watch/watch";
import { Stopwatch } from "./Components/stopwatch/stopwatch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Watch />
      <Stopwatch />
    </div>
  );
}

export default App;
