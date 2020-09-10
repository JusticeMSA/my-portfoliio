import React from 'react';
import './Todo.scss';

const Todo = ({text, todo, todos, setTodos}) =>{
    const deleteTodoHandler = () =>{
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completedTodoHandler = () => {
        setTodos(
            todos.map((item) =>{
                if(item.id === todo.id){
                    return{
                        ...item,
                        completed: !item.completed
                    }
                }
                return item;
            })
        );
    }
    return(
        <div className="Todo">
            <li className={`todo-text ${todo.completed ? "completed" : ""}`}>{text}</li>
            <div onClick={completedTodoHandler} className="completed-btn"><i className="fas fa-check"></i></div>
            <div onClick={deleteTodoHandler} className="delete-btn"><i className="fas fa-trash"></i></div>
        </div>
    );
}

export default Todo;