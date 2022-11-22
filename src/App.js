import logo from './logo.svg';
import Todosub from './components/todosub';
import Button from './components/button';
import ToDoList from './components/TodoList';
import React, { useRef } from "react";
import Form from './components/form';

function App() {
  const inputRef = useRef();

  function clickHandler() {
  const inputElement = inputRef.current;

    // Do something with inputElement...
    console.log(inputElement.value);
  }

  return (
    <div className="App">
      <main>
        {/* <Todosub></Todosub>
        <Button></Button> */}
        <Form></Form>
       <ToDoList></ToDoList>
      </main>
    </div>
  );
}

export default App;
