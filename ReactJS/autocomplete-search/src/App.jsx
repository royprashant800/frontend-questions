import { useState } from 'react';
import Autocomplete from './Autocomplete';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Autocomplete Search</h1>
      <Autocomplete />
    </>
  )
}

export default App
