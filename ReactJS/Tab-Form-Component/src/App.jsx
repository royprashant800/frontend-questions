import { useState } from "react";
import "./App.css";
import TabForm from "./components/TabForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Tab Form Component</h1>
      <TabForm />
    </div>
  );
}

export default App;
