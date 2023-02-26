import React, { useEffect, useState } from "react";

const MiComponente2 = () => {

    const [nombre, setNombre] = useState("Juan");

    useEffect(() => {
        console.log(nombre);
    }), [];

    const handleClick = () => {
        nombre === "Juan" ? setNombre("Pedro") : setNombre("Juan");
    }

  return <>
    <h1 onClick={handleClick}>useEffect</h1>

  </>;
};

export default MiComponente2;
