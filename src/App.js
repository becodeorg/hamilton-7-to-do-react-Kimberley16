import logo from './logo.svg';

import Todosub from './components/todosub';
import Button from './components/button';
import ToDoList from './components/test';


function App() {
  return (
    <div className="App">
      <main>
        <Todosub></Todosub>
        <Button></Button>
       <ToDoList></ToDoList>
      </main>
    </div>
  );
}

export default App;
