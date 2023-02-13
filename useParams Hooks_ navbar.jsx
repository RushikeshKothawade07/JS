import React from "react";
import { useParams } from "react-router-dom";
const User = () =>{
    const {fname,lname} = useParams();
    return(
        <>
            <h1>Welcome!  {fname} {lname}, nice meeting you!!</h1>
        </>
    )
}
export default User

////Demo.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import User from "./User";
import Error from "./Error";
import Menu from "./Menu";
const Demo = () => {
  return (
    <>
    <Menu/>
      {/* <h1>Hi, im your boss</h1> */}
      <Routes>
        <Route exact path="/" element={<About/>} />
        <Route path="/user/:fname/:lname" element={<User/>} />
        <Route  path="/*" element={<Error/>} />
      </Routes>
    </>
  );
};

export default Demo;



//Menu.jsx
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
        <NavLink exact activeClassName = "active_class" to='/user/rushi/boss'>User</NavLink>


        </>
            
    )
}
export default Menu
