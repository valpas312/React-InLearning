import React, {useState} from 'react'

const MiComponente = () => {

    const [seleccion, setSeleccion] = useState('')

    const handleChange = (e) => {
        setSeleccion(e.target.value)
    }

  return (<>
    <h1>useState</h1>
    <div>
        <div onChange={handleChange}>
            <input type="radio" name="opcion" value="Opcion 1"/> Opción 1 
            <input type="radio" name="opcion" value="Opcion 2"/> Opción 2
            <input type="radio" name="opcion" value="Opcion 3"/> Opción 3
        </div>
            <button onClick={() => setSeleccion(null)}>Clear</button>
    </div>

    <hr/>
    {seleccion && <h2>Has seleccionado: {seleccion}</h2> }

  </>  
  )
}

export default MiComponente