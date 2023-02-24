import React, { useState } from "react";

const MiBoton = () => {
//Funcion de la clase anterior
//   const test = (e) => {
//     e.toUppercase();
//   };

  const [conteo, setConteo] = useState(0);

  const incrementar = () => {
    setConteo(conteo + 1);
  };

  return (
    <>
      {/* Codigo de la clase anterior
      <button onClick={test}> Click me!</button> */}

      <button onClick={incrementar}> Conteo de personas {conteo} </button>
    </>
  );
};

export default MiBoton;
