import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faFlag } from '@fortawesome/free-solid-svg-icons';



const TodoComponent = (props) => {

    return (
        <div className='container'>
            <aside className='sidebar'>
                <div>
                    <button className='filter-button'>
                        <span className='filter-buttontext'>My day </span>
                    </button>
                    <button style={{ background: "rgba(191, 89, 89, 1)" }}
                        className='filter-button'>
                        <span className='filter-buttontext'>Important</span>
                    </button>
                    <button className='filter-button' >
                        <span className='filter-buttontext'>Completed</span></button>
                </div>

            </aside>
            <main className='content'>
                <div className='input-container'>
                    <form onSubmit={props.handleAdd}>
                        <input
                            className='input-field'
                            placeholder='typing...'
                            onChange={props.handleNewTodo}
                            value={props.item}
                            type='text'
                            id='text'
                        />
                        <label htmlFor='text'></label>
                        <button className='input-button' type="submit" >
                            <span className='plus-icon'>+</span>
                        </button>
                    </form>
                </div>
                <div >
                    <label class="todo-label" htmlFor='todo-list'>TODO LIST</label>
                    <ul className='list-holder'
                    >
                        {props.notCompletedTodos.map(todo => (
                            <li
                                className='todo-list'
                                key={todo.id}
                            >
                                <label htmlFor='item1'>
                                    <input
                                        type='checkbox'
                                        checked={todo.completed}
                                        onChange={() => props.handleComplete(todo)}
                                    />
                                    {todo.name}
                                </label>
                                <span className='icons'>
                                    <span className='position-icon' onClick={() => props.handleDelete(todo)}>
                                        <FontAwesomeIcon className='close-icon' icon={faTrash} />
                                    </span>
                                    <span class="flag-position">
                                        <FontAwesomeIcon className='flag-icon' icon={faFlag} />
                                    </span>
                                </span>





                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <label class="todo-label" htmlFor='todo-list'>COMPLETED LIST</label>
                    <ul
                        id="todo-list"
                        className='list-holder'

                    >
                        {props.completedTodos.map(todo => (
                            <li
                                className='todo-list'
                                key={todo.id}
                                style={{
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
                                <span className='icons'>
                                    <span className='position-icon' onClick={() => props.handleDelete(todo)}>
                                        <FontAwesomeIcon className='close-icon' icon={faTrash} />
                                    </span>
                                    <span class="flag-position">
                                        <FontAwesomeIcon className='flag-icon' icon={faFlag} />
                                    </span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>

        </div>
    );
};

export default TodoComponent;