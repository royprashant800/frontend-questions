import useLocalStorage from './hooks/useLocalStorage';
import './App.css'

function App() {
  const [count, setCount] = useLocalStorage("count", 0);

  return (
    <>
      <h1>Vite + React</h1>
      <h4>count - {count}</h4>
      <button onClick={() => setCount((prevCount) => prevCount + 1 )}>Increment</button>
    </>
  )
}

export default App
