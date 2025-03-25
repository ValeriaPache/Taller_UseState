import React, { useState, useEffect } from "react";
import "../App.css";

export const Timer = () => {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    let timer;
    if (activo) {
      timer = setInterval(() => setSegundos(s => s + 1), 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [activo]);

  return (
    <div className="timer-container">
      <h2>Tiempo: {segundos}s</h2>
      <button onClick={() => setActivo(true)}>Iniciar</button>
      <button onClick={() => { setActivo(false); setSegundos(0); }}>Parar</button>
    </div>
  );
};