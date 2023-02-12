import React, { useState } from "react";
import TodoList from "./TodoList";

const Demo = () => {
  const [inputList, setInputList] = useState();
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((currItem , index) => {
        return index !==  id;
      });
    });
  };
  return (
    <>
      <div>
        <h1>To Do World!</h1>
      </div>
      <div className="main-div">
        <input
          type="text"
          placeholder="Add item"
          onChange={itemEvent}
          value={inputList}
        ></input>
        <button onClick={listOfItems}> + </button>
        <br />
        <br />
        <h2>To do List : </h2>
        <div>
          <ol>
            {items.map((currItem, index) => {
              return (
                <>
                  <TodoList
                    key={index}
                    id={index}
                    text={currItem}
                    onSelect={deleteItems}
                  />
                  <button> - </button>
                </>
              );
            })}
          </ol>
        </div>
        <span>Happy Day</span>
      </div>
    </>
  );
};
export default Demo;
