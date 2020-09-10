<<<<<<< HEAD
import React, {useState} from 'react';
import './App.scss';
import './_theme.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


//import components
import Header from './componets/Shared/Header/Header';
import Home from './componets/Home/Home';
=======
import React, {useState, useEffect} from 'react';
import './App.scss';

//import components
import Form from './componets/Form';
import TodoList from './componets/TodoList';
>>>>>>> 5ef3b85eb038b1fb99691f311b1ef458146846f2


function App() {

<<<<<<< HEAD
  const [menuOpen, setmenuOpen] = useState(false);
  
  return (


    <Router>
      <div className="App">
        <Header 
          menuOpen={menuOpen} 
          setmenuOpen={setmenuOpen} 
        />
        
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route> */}
        </Switch>
      </div>
    </Router>
=======
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
>>>>>>> 5ef3b85eb038b1fb99691f311b1ef458146846f2
  );
}

export default App;
