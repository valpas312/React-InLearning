import React, {createContext} from 'react'
import MiComponente4 from './MiComponente4'

const Contenedor = () => {
  return (<>
    <MiContexto.Provider value={{nombre: 'Juan', apellido: 'Perez'}}>
    <MiComponente4/>
    </MiContexto.Provider>
  </>
  )
}

export const MiContexto = createContext()

export default Contenedor