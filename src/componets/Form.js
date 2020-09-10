import React from 'react';
import './Form.scss';

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) =>{
    const inputHandler = (e) =>{
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText(""); 
    }
    const statusHandler = (e) =>{
        setStatus(e.target.value);
    }

    return(
        <div className="Form">
            <form>
                <input value={inputText} onChange={inputHandler} className="text-input" type="text"/>
                <button onClick={submitTodoHandler} type="submit" className="button"><i className="fas fa-plus-square"></i></button>
                <select onChange={statusHandler}>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Incomplete">Incomplete</option>
                </select>
            </form>
        </div>
    );
};

export default Form;


