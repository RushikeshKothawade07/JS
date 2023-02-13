import React from "react";
import { useParams,useLocation } from "react-router-dom";
const User = () =>{
    const {fname,lname} = useParams();
    const Location = useLocation();
    return(
        <>
            <h1>Welcome!  {fname} {lname}, nice meeting you!!</h1>
            <h1>Your Location is {Location.pathname}</h1>

            {Location.pathname === `/user/vinod/thapa` ? (<button onClick={()=>{
                alert('You are awesome bro')
            }}>Click me now</button>) : null}
        </>
    )
}
export default User
