import { useEffect, useState } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';

function App() {
  const { data: quote, loading, error } = useFetch('https://api.github.com/users/royprashant800');

  return (
    <>
      <h1>Vite + React</h1>
      <button   >Fetch Quote</button>
      {loading && <p>{loading}</p>}
      {quote && <p>{quote}</p>}
      {error && <p>{error}</p>}
    </>
  )
}

export default App
