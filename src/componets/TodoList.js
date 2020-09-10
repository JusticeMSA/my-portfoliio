import React from 'react';
import './todo-list.scss';

//Import Components
import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredTodos}) =>{
    return(
        <div className="todo-list-container">
            <ul className="todo-list">
                 {filteredTodos.map((todo) =>(
                     <Todo 
                        todos={todos}
                        setTodos={setTodos} 
                        todo={todo}
                        text={todo.text}
                        key={todo.id} 
                    />
                 ))}
            </ul>
        </div>
    );
};

export default TodoList;


