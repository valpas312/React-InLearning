import React, { useState } from "react";
import Opcion from "./Opcion";

const MiComponente1 = () => {

    const [name, setName] = useState("Opcion 1");

    const [opciones, setOpciones] = useState([
        { id: 1, name: "Opcion 1" },
        { id: 2, name: "Opcion 2" },
        { id: 3, name: "Opcion 3" }
    ])

  return <>
    <Opcion name={name}/>
    <hr/>
    {opciones.map((opcion) => {
        return (
            <div key={opcion.id}>
                <Opcion name={opcion.name}/>
            </div>
        )})
    }
  </>;
};

export default MiComponente1;
