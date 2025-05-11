import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stopwatch from './Stopwatch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Stopwatch</h1>
      <Stopwatch />
    </>
  )
}

export default App
