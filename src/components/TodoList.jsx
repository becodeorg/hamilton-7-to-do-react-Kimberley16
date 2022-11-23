import React, { useState } from "react";
export default function ToDoList({todos}){ //veut dire que l'on va utiliser le todos qui est défini dans App
  
const [checked, setChecked] = useState(false)

const modifyToDo = event => {
    if (event.target.checked){
        event.target.closest("li").setAttribute("style", "text-decoration: line-through");
    }
    else { event.target.closest("li").setAttribute("style", "text-decoration: none");}
    setChecked(current => !current);
}
return (
    <div>
        <h2 >My Todo-list</h2>
        <div>
            <ul>
                {todos.map(todo => (
                <li key={todo}><input type='checkbox' value={checked} onChange={modifyToDo}></input> {todo}</li>
                // <p> {todo.text}</p>
                ))}
            </ul>
        </div>
    </div>
);
}
// return (
//   <ul>
//     {todos.map((todo, index) => (
//       <li key={index} >
//         <input type="checkbox" defaultChecked={todo.check}
//         onChange={modifyToDo} //appel la fonction (c'est la syntaxe pour jsx)
//         />
//         <p> {todo.text}</p>
//       </li>
//     ))}
//   </ul>
// )};

// if (todo.check == false){
//     <p> {todo.text}</p>
// }
// else {

// }