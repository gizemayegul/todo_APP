import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



const TodoComponent = (props) => {

    return (

        <div >
            <form onSubmit={props.handleAdd}>
                <input
                    placeholder='typing...'
                    onChange={props.handleNewTodo}
                    value={props.item}
                    type='text'
                    id='text'
                ></input>
                <button type="submit" ><span>+</span></button>
            </form>
            <div >
                <label htmlFor='todo-list'>TODO LIST</label>
                <ul
                    id="todo-list"


                >
                    {props.notCompletedTodos.map(todo => (
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
                                    onChange={() => props.handleComplete(todo)}
                                />
                                {todo.name}
                            </label>
                            <span onClick={() => props.handleDelete(todo)}><FontAwesomeIcon className='close-icon' icon={faTrash} /></span>

                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <label htmlFor='todo-list'>COMPLETED LIST</label>
                <ul
                    id="todo-list"

                >
                    {props.completedTodos.map(todo => (
                        <li

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
                                    onChange={() => props.handleComplete(todo)}
                                />
                                {todo.name}
                            </label>
                            <span onClick={() => props.handleDelete(todo)}><FontAwesomeIcon className='close-icon' icon={faTrash} /></span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoComponent;