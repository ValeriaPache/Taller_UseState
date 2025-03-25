import React from "react";
import { DarkMode } from "./components/DarkMode";
import {LikeDislike} from "./components/LikeDislike"
import {ColorChanger} from "./components/ColorChanger"
import {Timer} from "./components/Timer"
import "./App.css";

export const App = () => {
  return (
    <div className="app-container">
      <h1>Taller Evaluativo - useState</h1>
      <DarkMode/>
      <LikeDislike />
      <ColorChanger />
      <Timer />
    </div>
  );
};
