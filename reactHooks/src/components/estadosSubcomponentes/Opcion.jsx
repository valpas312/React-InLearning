import React from 'react'

const Opcion = (props) => {
  return (<>
    <h1>Opciones</h1>
    <div>
        <h5>{props.name}</h5>
        <p>Esta es la {props.name} de nuestra app</p>
    </div>
  </>
  )
}

export default Opcion