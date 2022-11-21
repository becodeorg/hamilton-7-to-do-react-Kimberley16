import React, { useState } from "react";
export default function ToDoList(){
  const initialTodos = [{
    text: "Learn React",
    check: false},{
    text: "be awesome",
    check: false}]

const [todos, setTodos] = useState(initialTodos);
return (
  <ul>
    {todos.map((todo, index) => (
      <li key={index} >
        <input type="checkbox" defaultChecked={todo.check}/>
        <p> {todo.text}</p>
      </li>
    ))}
  </ul>
)};