import React from 'react'
import { SplitScreen } from './components/styledcomponents/SplitScreen'

const RigthCompo = () => {
  return <div style={{border: "1px solid red"}}>Right</div>
}

const LeftCompo = () => {
  return <div style={{border: "1px solid blue"}}>Left</div>
}

const App = () => {
  return<>
    <SplitScreen
      left={LeftCompo}
      right={RigthCompo}
    />
  </>
}

export default App