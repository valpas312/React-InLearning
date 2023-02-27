import React, {useMemo, useState} from 'react'

const MiComponente5 = () => {

    const [valorMemo, setValorMemo] = useState()

    const granNumero = () => {
        let i = 0
        while (i < 1000000000) i++
        setValorMemo(i)
    }

    useMemo(() => {
        console.log('Calculando gran numero')
        return granNumero()
    }, [])

    const [valor, setValor] = useState(0)

    const nuevoValor = () => {
        setValor(Math.random().toFixed(1)*10)
    }

    const mismoValor = () => {
        setValor(10)
    }

  return (<>
    <h3>MiComponente5</h3>
    <div>
        <p>Valor: {valor}</p>
        <button onClick={nuevoValor}>Nuevo valor</button>
        <button onClick={mismoValor}>Mismo valor</button>
    </div>
  </>
  )
}

export default MiComponente5