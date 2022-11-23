import ToDoList from './components/TodoList';
import React, { useRef, useState, useEffect} from "react";
import Form from './components/form';

const LSKEY = "MyTodoApp";

function App() {
  const inputRef = useRef();

  let initialTodos = [];
  
  const [todos, setTodos] = useState(() => {
    initialTodos = JSON.parse(localStorage.getItem(LSKEY + ".todos"));
    return initialTodos || [];
  });

  function clickHandler() {
  const inputElement = inputRef.current;
  const newTodo = JSON.parse(JSON.stringify(todos));
  newTodo.push(inputElement.value);
  setTodos(newTodo);
  console.log(inputElement.value);
  }

  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <div className="App">
      <main>
        {/* <Todosub></Todosub>
        <Button></Button> */}
        <Form inputRef={inputRef} clickHandler={clickHandler}></Form>
       <ToDoList todos={todos}></ToDoList>
      </main>
    </div>
  );
}

export default App;
