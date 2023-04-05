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
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo;
                }
            })
        // case "COMPLETED_TODOS":
        //     return{...state,completedTodos: state.filter(ctodo=>ctodo.completed ===true)}
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

    const completedTodos = todos.filter((todo => todo.completed === true));
    const notCompletedTodos = todos.filter((todo => todo.completed === false));

    console.log(todos, 'hi',)
    console.log(completedTodos, 'completed')

    return (

        <div>
            <form onSubmit={handleAdd}>
                <label htmlFor='new Todo'>New Todo</label>
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
                <label htmlFor='todo-list'>TODO LIST</label>
                <ul
                    id="todo-list"
                >
                    {notCompletedTodos.map(todo => (
                        <li
                            key={todo.id}
                            style={{
                                listStyle: 'none',
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
            <div>
                <label htmlFor='todo-list'>COMPLETED LIST</label>
                <ul
                    id="todo-list"
                >
                    {completedTodos.map(todo => (
                        <li
                            key={todo.id}
                            style={{
                                listStyle: 'none',
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