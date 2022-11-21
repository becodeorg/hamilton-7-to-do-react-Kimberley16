import logo from './logo.svg';
import './App.css';
import Todosub from './components/todosub';
import Button from './components/button';
import Checkbox from './components/checkbox';

function App() {
  return (
    <div className="App">
      <main>
        <Todosub></Todosub>
        <Button></Button>
       <Checkbox></Checkbox>
      </main>
    </div>
  );
}

export default App;
