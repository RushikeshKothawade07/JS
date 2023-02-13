import React from "react";
import { NavLink } from "react-router-dom";
function Menu(){
    return (
        <>
        {/* dont do this */}
        {/* <a href="/" > About us</a>
        <a href="/contact" > Contact us</a> */}

        {/* //do this instead */}

        <NavLink exact activeClassName = "active_class" to='/'>About</NavLink><br/>
        <NavLink exact activeClassName = "active_class" to='/contact'>Contact</NavLink>


        </>
            
    )
}
export default Menu





//Demo.jsx

import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";
const Demo = () => {
  return (
    <>
    <Menu/>
      {/* <h1>Hi, im your boss</h1> */}
      <Routes>
        <Route exact path="/" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route  path="/*" element={<Error/>} />
      </Routes>
    </>
  );
};

export default Demo;
