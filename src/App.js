import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
      <div className="App">
        <h1>Let's Play Lights Out!</h1>
        <Board nrows={3} ncols={3} chanceLightStartsOn={.1}/>
      </div>
  );
}

export default App;
