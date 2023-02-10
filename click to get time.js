import React, { useState } from "react";
const App = () => {
  const state = useState();
  let newTime = new Date().toLocaleTimeString();
  const [ctime,setCTime]  =  useState(newTime);
  const func = () => {
    newTime = new Date().toLocaleTimeString();
    setCTime(newTime)
  };
  return (
    <>
      <h1>{newTime}</h1>
      <button onClick={func}> Click me </button>
    </>
  );
};

export default App;
