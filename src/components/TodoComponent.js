import React from 'react';
import { useReducer, useState } from "react";
import { v4 as uuid } from 'uuid';


const initialTodos = [
    { id: 1, name: 'Todo 1' }
    ,
    { id: 2, name: 'Todo 2' },
];
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: uuid(), name: action.payload }];
        default:
            return state;
    }
}

console.log(initialTodos, 'hi')


const TodoComponent = () => {
    const [todos, dispatch] = useReducer(reducer, initialTodos)
    const [item, setItem] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD", payload: item })
        setItem('')
    }
    const handleInput = (e) => {
        setItem(e.target.value)
    }
    console.log(item)
    return (
        <div>
            <header>
                <h1>Todo App</h1>
            </header>
            <div>
                <form onSubmit={handleAdd}>
                    <label>New Todo</label>
                    <input
                        placeholder='typing...'
                        onChange={handleInput}
                        value={item}
                        type='text'
                    ></input>
                    <button type="submit" >Submit</button>
                </form>
                <div>
                    <ul>
                        {todos.map(todo => (
                            <li key={todo.id}>{todo.name}</li>
                        ))}
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default TodoComponent;