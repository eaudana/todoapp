import Header from "./components/Header.js";
import ListForm from "./components/Form.js";
import ToDoList from "./components/ToDoList.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <ToDoList/>
    </div>
  );
}

export default App;
