import React, { useState } from "react";
import Sresult from "./Sresult";
const Search = () => {
  const [img, setImg] = useState("");
  const inputEvent = (event) => {
    const data = event.target.value;
    setImg(data);
  };
  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search anything..."
          name={img}
          onChange={inputEvent}
        />
      </div>
      {img==="" ?null: 
      <Sresult name={img}/>}
    </>
  );
};
export default Search;






//Sresult.jsx

import React from "react";
const Sresult=(props)=>{
    const img1 = `https://unsplash.com/s/photos/code/?${props.name}`
    return(
        <>
            <div className="searchbar input">
                <img src={img1} alt="search img"/>
            </div>
        </>
    )
}
export default Sresult;
