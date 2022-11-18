import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Checkbox from './components/checkbox';
function App() {
  return (
    <div className="App">
      <main>
        <h1>My Todo App</h1>
        <input type="text" id="name" name="name" required
       minlength="4" maxlength="8" size="10"></input>
        <Button></Button>
          <div>
            <h2>To do</h2>
            <Checkbox></Checkbox>
            <br />
            <Checkbox></Checkbox>
          </div>
      </main>
    </div>
  );
}

export default App;
