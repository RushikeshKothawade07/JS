import React from "react";
import { NavLink } from "react-router-dom";

function Error(){
    return (<>
        <h1>404    <br/>Im the Error page bro </h1>
        <NavLink  to="/" >Go back</NavLink>

    </>
    )
}
export default Error
