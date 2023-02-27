import React, {useContext} from 'react'
import {MiContexto} from './Contenedor'

const MiComponente4 = () => {

    const {nombre, apellido} = useContext(MiContexto)

  return (<>
    <h3>MiComponente4</h3>
    <p>Nombre: {nombre}</p>
    <p>Apellido: {apellido}</p>
  </>
  )
}

export default MiComponente4