import React, { useContext } from "react";
import { MiContexto } from "./Contenedor";

const MiComponente4 = () => {
  const { state } = useContext(MiContexto);

  // console.log({ ...state });

  return (
    <>
      <h3>MiComponente4</h3>
      <div>
        <p>Nombre: {state.nombre}</p>
        <p>Apellido: {state.apellido}</p>
        <p>Edad: {state.edad}</p>

        {state.status === 1 ? (
          <p>Seleccionado</p>
        ) : (
          <p>No seleccionado</p>
        )}
      </div>
    </>
  );
};

export default MiComponente4;
