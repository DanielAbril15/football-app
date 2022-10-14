import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Leagues from "./components/Competitions";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leagues" element={<Leagues />} />
        <Route />
        <Route />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
