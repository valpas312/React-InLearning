import React, { useState } from 'react'

const MiOtroBoton = () => {

    const [conteo, setConteo] = useState(0)

    const incrementar = () => {
        setConteo(conteo + 1)
    }

  return (<>
    <button onDoubleClick={incrementar}> Conteo de parejas {conteo} </button>
  </>
  )
}

export default MiOtroBoton