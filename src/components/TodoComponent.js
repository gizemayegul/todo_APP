import React from 'react';
import { useReducer, useState } from "react";
import { v4 as uuid } from 'uuid';


const initialTodos = [];
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: uuid(), name: action.payload, completed: false }];
        case "TOOGLE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            })
        default:
            return state;
    }
}

const TodoComponent = () => {
    const [todos, dispatch] = useReducer(reducer, initialTodos)
    const [item, setItem] = useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD", payload: item })
        setItem('')
    }
    const handleNewTodo = (e) => {
        e.preventDefault();
        setItem(e.target.value)
    }
    const handleComplete = (todo) => {
        dispatch({ type: "TOOGLE", id: todo.id })
    }

    console.log(todos, 'hi', todos.completed)
    return (

        <div>
            <form onSubmit={handleAdd}>
                <label htmlFor='text'>New Todo</label>
                <input
                    placeholder='typing...'
                    onChange={handleNewTodo}
                    value={item}
                    type='text'
                    id='text'
                ></input>
                <button type="submit" >Submit</button>
            </form>
            <div>
                <ul>
                    {todos.map(todo => (
                        <li
                            key={todo.id}
                            style={{ listStyle: 'none',
                                textDecoration: todo.completed ? 'line-through' : 'none',
                            }}
                            
                        >
                            <label htmlFor='item1'>
                                <input
                                    type='checkbox'
                                    checked={todo.completed}
                                    onChange={() => handleComplete(todo)}
                                />
                                {todo.name}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    );
};

export default TodoComponent;