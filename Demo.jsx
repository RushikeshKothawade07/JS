
import React, { useState } from "react";
import { questions } from "./api";
import "./index.css";
import Accordian  from "./Accordian";

const Demo = () => {
  const [data, setData] = useState(questions);
  return (
    <>
      {data.map((curElem) => {
        const { id } = curElem;
        return <Accordian key={id} {...curElem} />;
      })}
    </>
  );
};
export default Demo
