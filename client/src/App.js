import React from "react";
import Lobby from "./screens/lobby";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Lobby />} />
      </Routes>
    </div>
  );
}

export default App;
