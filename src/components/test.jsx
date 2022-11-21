import React, { useState } from "react";
export default function ToDoList(){
  const initialTodos = [{
    text: "Learn React",
    check: false},{
    text: "be awesome",
    check: false}]

const [todos, setTodos] = useState(initialTodos);
const [checked, setChecked] = useState(false)

const modifyToDo = event => {
    if (event.target.checked){
        event.target.closest("p").setAttribute("style", "text-decoration: line-through");
    }
    else { event.target.closest("p").setAttribute("style", "text-decoration: none");}
}
return (
  <ul>
    {todos.map((todo, index) => (
      <li key={index} >
        <input type="checkbox" defaultChecked={todo.check}
        onChange={modifyToDo} //appel la fonction (c'est la syntaxe pour jsx)
        />
        <p> {todo.text}</p>
      </li>
    ))}
  </ul>
)};

// if (todo.check == false){
//     <p> {todo.text}</p>
// }
// else {

// }