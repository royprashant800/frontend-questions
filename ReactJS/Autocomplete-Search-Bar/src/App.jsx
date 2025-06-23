import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if(cache[input]) {
      setResults(cache[input])
      return;
    }
    console.log("API call", input);
    const res = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const data = await res.json();
    setResults(data?.recipes);
    setCache((prev) => ({ ...prev, [input]: data?.recipes }))
  };

  useEffect(() => {
    const timer = setTimeout(() => {fetchData()}, 300);

    return () => {
      clearInterval(timer);
    } 
  }, [input]);

  return (
    <div>
      <h1>Autocomplete search bar</h1>
      <div>
        <input
          type="text"
          className="search-input"
          value={input}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
          onChange={(e) => setInput(e.target.value)}
        />
        {input.length > 0 && showResults && <div className="results-container">
          {results.map((result) => <span className="result" key={result.id}>{result.name}</span>)}
        </div>}
      </div>
    </div>
  );
}

export default App;
