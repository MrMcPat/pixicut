import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function handleFetch() {
      const helloData = await axios.get("/hello");
      setCount(helloData.data.count);
    }
    handleFetch();
  }, []);

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>
    </div>
  );
}

export default App;
