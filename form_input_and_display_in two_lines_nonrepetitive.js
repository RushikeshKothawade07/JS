import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    num:"",
  });
  const inputEvent=(event)=>{
    const {name,value} = event.target;
    setFullName((preValue)=>{
        return {
            ...preValue,
            [name] : value,
        }
    })
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    alert('Submitted bro')
  }

  
  return (
    <>      
    <form onSubmit={handleSubmit}>
      <div>
        <h1> Hello {fullName.fname} {fullName.lname} {fullName.num} </h1>
        <input
          type="text"
          placeholder="Enter your first name"
          onChange={inputEvent}
          value={fullName.fname}
          name = "fname"
        />
        <br/>
        <input
          type="text"
          placeholder="Enter your last name"
          onChange={inputEvent}
          value={fullName.lname}
          name = "lname"
        />
        <br/>
        <input
          type="number"
          placeholder="Enter your number"
          onChange={inputEvent}
          value={fullName.num}
          name = "num"
        />

        <button type="submit">Click me</button>
      </div>
    </form>
    </>
  );
};

export default App;
