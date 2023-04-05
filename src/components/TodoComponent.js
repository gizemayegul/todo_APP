import React from 'react';
import { useReducer, useState } from "react";
import { v4 as uuid } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

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
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.id);
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
    const handleDelete = (todo) => {
        dispatch({ type: "DELETE_TODO", id: todo.id });
    }


    const completedTodos = todos.filter((todo => todo.completed === true));
    const notCompletedTodos = todos.filter((todo => todo.completed === false));
    const recentlyDeleted = todos.filter((todo) => todo.id !== todo.id)

    console.log(todos, 'hi',)
    console.log(completedTodos, 'completed')
    console.log(recentlyDeleted,'deleted')

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
            <div >
                <label htmlFor='todo-list'>TODO LIST</label>
                <ul
                    id="todo-list"
                    className='list-items'

                >
                    {notCompletedTodos.map(todo => (
                        <li
                            className='todos-list'
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
                            <span onClick={() => handleDelete(todo)}><FontAwesomeIcon className='close-icon' icon={faTrash} /></span>

                        </li>
                    ))}

                </ul>


            </div>
            <div>
                <label htmlFor='todo-list'>COMPLETED LIST</label>
                <ul
                    id="todo-list"
                    className='list-items'
                >
                    {completedTodos.map(todo => (
                        <li
                            className='todos-list'
                            key={todo.id}
                            style={{
                                listStyle: 'none',
                                textDecoration: todo.completed ? 'line-through' : 'none',
                            }}

                        >
                            <label htmlFor='items'>
                                <input
                                    type='checkbox'
                                    checked={todo.completed}
                                    onChange={() => handleComplete(todo)}
                                />
                                {todo.name}
                            </label>
                            <span onClick={() => handleDelete(todo)}><FontAwesomeIcon className='close-icon' icon={faTrash} /></span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoComponent;