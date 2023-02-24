import React, {useState} from "react";

const Formulario = () => {

  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    edad: 0,
  })

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <h1>Ingreso</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Nombre</label>
        <input type="text" name="nombre" onChange={handleChange} />

        <label>Apellido</label>
        <input type="text" name="apellido" onChange={handleChange} />

        <label>Edad</label>
        <input type="number" name="edad" onChange={handleChange}/>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Formulario;
