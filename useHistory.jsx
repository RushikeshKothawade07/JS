import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
const User = () => {
  const { fname, lname } = useParams();
  const Location = useLocation();
  const Navigate = useNavigate();
  return (
    <>
      <h1>
        Welcome! {fname} {lname}, nice meeting you!!
      </h1>
      <h1>Your Location is {Location.pathname}</h1>

      {Location.pathname === `/user/vinod/thapa` ? (
        <>
          <button onClick={() => Navigate(-1)}>Go Back</button>
          <button onClick={() => Navigate("/")}>About Page</button>
        </>
      ) : null}
    </>
  );
};
export default User;
