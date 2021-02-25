import './App.css';
import list from './Data/list';
import ToDoList from './ToDoList/ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 className="App-header__title" data-testid="page-title">
          To Do
        </h3>
      </header>
      <div className="App-body">
        <ToDoList list={list} />
      </div>
    </div>
  );
}

export default App;
