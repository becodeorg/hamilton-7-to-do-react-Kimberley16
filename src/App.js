
import ToDoList from './components/TodoList';
import React, { useRef, useState, useEffect} from "react";
import Form from './components/form';

const LSKEY = "MyTodoApp";

function App() {
  const inputRef = useRef();
  const initialTodos = ["Learn React", "be awesome"]
  // let newTodo = [];
  const [todos, setTodos] = useState(initialTodos);
  function clickHandler() {
  const inputElement = inputRef.current;
  // Do something with inputElement...
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
