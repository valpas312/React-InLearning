import React from 'react'
import useDocumentMousePosition from './hooks/useDocumentMousePosition'

const MiComponente6 = () => {

    const mouseOnRange = useDocumentMousePosition()

  return (<>
    <h1>Custom Hooks</h1>
    <h2>useDocumentMousePosition</h2>
    <p>Mouse is on range: {mouseOnRange ? 'true' : 'false'}</p>
  </>
  )
}

export default MiComponente6