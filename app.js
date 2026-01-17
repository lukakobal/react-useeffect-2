import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  console.log("RENDER");

  useEffect(() => {
    console.log("EFFECT: count changed");
  }, [count]);

  return (
    <div className="app">
      <h1>React 62 – useEffect vaja</h1>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increase count</button>

      <hr />

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
