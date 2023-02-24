import React, { useState } from 'react'

const MiCheck = () => {

    const [conteo, setConteo] = useState(0)

    const incrementar = () => {
        setConteo(conteo + 1)
    }

    return (<>
        <label>Checkeado {conteo} veces</label>
        <input type="checkbox" onChange={incrementar} />
    </>
    )
}

export default MiCheck