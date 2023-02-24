import React from 'react'

const ReservarHora = (props) => {

    let hora = Math.floor(Math.random() * 24) + 1;
    
  return (<>
    <h1>Reservar Hora</h1>
    <p>La hora reservada es: {hora}:00</p>
    <button onClick={props.onClick}>Reservar</button>
  </>
  )
}

export default ReservarHora