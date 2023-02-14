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
        <Route path="/*" element={<Error/>} />
      </Routes>
    </>
  );
};

export default Demo;
