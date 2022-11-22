import React, { useRef } from "react";

export default function Form({inputRef, clickHandler}) {

  return (
    <div>
        <h1>My Todo App</h1>
      <input ref={inputRef} type="text" placeholder="Write a new todo" />
      <br />
      <button onClick={clickHandler}>Add todo</button>
    </div>
  );
}