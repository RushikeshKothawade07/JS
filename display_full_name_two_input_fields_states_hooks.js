import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState();
  const [fullName, setFullName] = useState();
  const [lastName, setLastName] = useState();
  const [lastNamenew, setLastNamenew] = useState();

  const inputEvent = (event) => {
    setName(event.target.value);
  };
  const inputEventtwo = (event) => {
    setLastName(event.target.value);
  };
  const onSubmits = (event) => {
    event.preventDefault()
    setFullName(name);
    setLastNamenew(lastName)
  };
  return (
    <>
      
    <form onSubmit={onSubmits}>

      <div>
        <h1> Hello {fullName} {lastNamenew} </h1>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={inputEvent}
          value={name}
        />
        <br/>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={inputEventtwo}
          value={lastName}
        />

        <button onClick={onSubmits}>Click me</button>
      </div>
    </form>
    </>
  );
};

export default App;
