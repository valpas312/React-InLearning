import React, { useEffect, useState } from "react";

const MiComponente2 = () => {

    const [nombre, setNombre] = useState("Juan");

    const [nombre1, setNombre1] = useState("Juan");

    useEffect(() => {
        console.log(nombre);
    }, [nombre]);

    const handleClick = () => {
        nombre === "Juan" ? setNombre("Pedro") : setNombre("Juan");
    }

    const handleClick1 = () => {
        nombre1 === "Juan" ? setNombre1("Pedro") : setNombre1("Juan");
    }

  return <>
    <h1 onClick={handleClick}>useEffect</h1>
    <h2>{nombre}</h2>
    <h3 onClick={handleClick1}>Sin efecto</h3>
    <h4>{nombre1}</h4>
  </>;
};

export default MiComponente2;