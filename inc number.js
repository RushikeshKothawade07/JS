import React, { useState } from "react";
let count = 0;
const App = () => {
  const state = useState();
  const [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1.2);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncNum}> Click me </button>
    </>
  );
};

export default App;
