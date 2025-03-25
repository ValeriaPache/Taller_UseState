import React, { useState } from "react";
import "../App.css";

const colores = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#000000", "#FFFFFF"];

export const ColorChanger = () => {
  const [color, setColor] = useState("#FFFFFF");

  const cambiarColor = () => {
    const nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    setColor(nuevoColor);
    alert(`Color elegido: ${nuevoColor}`);
  };

  return (
    <div className="color-box" style={{ backgroundColor: color }}>
      <button onClick={cambiarColor}>Cambiar Color</button>
    </div>
  );
};