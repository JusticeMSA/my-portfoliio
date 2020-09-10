import React, {useState, useEffect} from 'react';
import './App.scss';

//import components
import Form from './componets/Form';
import TodoList from './componets/TodoList';


function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() =>{
    filteredTodosHadler();
  },[status, todos]);

  const filteredTodosHadler = () =>{
    switch(status){
      case "Completed" :
        setFilteredTodos(todos.filter(todo => todo.completed === true))
      break;
      case "Incomplete" :
        setFilteredTodos(todos.filter(todo => todo.completed === false))
      break;
      default:
        setFilteredTodos(todos)
      break
    }
  }
  return (
    <div className="App">
      <h1>Justice's Todo List</h1>
      <Form 
        todos={todos}
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText}
        setStatus={setStatus}
        />
      <TodoList 
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
        status={status}
        />
    </div>
  );
}

export default App;
