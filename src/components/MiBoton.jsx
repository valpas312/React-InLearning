import React from 'react'

const MiBoton = () => {

    const test = (e) => {
        e.toUppercase()
    }
    
  return (<>
    <button onClick={test}> Click me!</button>
  </>
  )
}

export default MiBoton