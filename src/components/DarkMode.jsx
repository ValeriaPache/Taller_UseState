import React, { useState } from "react";
import "../App.css";

export const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Modo Light" : "Modo Dark"}
      </button>
    </div>
  );
};