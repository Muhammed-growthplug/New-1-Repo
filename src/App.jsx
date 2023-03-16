import { useState } from 'react'
import Router from './Router/router'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router/>
  )
}

export default App
