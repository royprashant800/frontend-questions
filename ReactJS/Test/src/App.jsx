import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>
        {count}
        <button onClick={handleCount}>Counter</button>
      </div>
    </>
  );
}

export default App;
