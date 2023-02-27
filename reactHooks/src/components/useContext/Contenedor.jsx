import React, {createContext, useReducer} from 'react'
import MiComponente4 from './MiComponente4'

const Contenedor = () => {

  const data = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    status: 0
  }

  const reducer = (state, action) =>{
    switch(action.type){
      case "seleccionar":
        return {...state, status: 1}
      case "deseleccionar":
        return {...state, status: 0}
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, data )
  return (<>
    <MiContexto.Provider value={{state, dispatch}}>
    <MiComponente4/>
    </MiContexto.Provider>

    <button onClick={() => {dispatch({type: "seleccionar"})}}>Seleccionar</button>
    <button onClick={() => {dispatch({type: "deseleccionar"})}}>Deseleccionar</button>
  </>
  )
}

export const MiContexto = createContext()

export default Contenedor