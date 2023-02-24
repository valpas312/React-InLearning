import React, { useState } from "react";
import MiError from "./MiError";

const MiProducto = () => {
  const [error, setError] = useState(false);

  
  const comprarProducto = (e) => {
    try {
      e.falsoMetodo();
    } catch (error) {
      setError(true);
    }
  };
  
  return (
    <>
      <h1>Producto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
      </p>
      <button onClick={comprarProducto}>Comprar</button>
      {error && <MiError />}
    </>
  );
};

export default MiProducto;
