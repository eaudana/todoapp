import Header from "./components/Header.js";
import ToDoList from "./components/ToDoList.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="taskSection">
        <Header />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
