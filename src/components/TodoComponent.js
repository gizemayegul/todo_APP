import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faFlag } from '@fortawesome/free-solid-svg-icons';



const TodoComponent = (props) => {

    return (

        <div className='app-wrapper'>
            <div className='filter-buttons'>
                <button onClick={props.handleShowTodo} >
                    <span >Todo </span>
                </button>
                <button onClick={props.handleShowImportant} style={{ background: "rgba(191, 89, 89, 1)" }}
                >
                    <span >Important</span>
                </button>
                <button onClick={props.handleShowCompleted}  >
                    <span >Completed</span></button>
            </div>


            <div className='input-container'>
                {props.showTodo && (
                    <div>
                        <form  onSubmit={props.handleAdd}>
                            <input
                                className='input-addtodo'
                                onChange={props.handleNewTodo}
                                value={props.item}
                                type='text'
                                id='text'
                            />
                            <label htmlFor='text'></label>
                            <button className='input-button' type="submit" >
                                Add Todo
                            </button>
                        </form>
                        <div>
                            <div>
                                <h2 style={{ color: 'white' }}>TODO LIST</h2>
                            </div>
                            <div className='todo-lists'>
                                <ul className='todo-container'>
                                    {props.notCompletedTodos.map(todo => (
                                        <li className='todo'
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
                                            <span >
                                                <span onClick={() => props.handleDelete(todo)}>
                                                    <FontAwesomeIcon icon={faTrash} className='icons-delete' />
                                                </span>
                                                <span onClick={() => props.handleFlag(todo)}>
                                                    <FontAwesomeIcon icon={faFlag} className='icons-flag' />
                                                </span>

                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>)}
                {props.showCompleted && (
                    <div>
                        <div>
                            <h2 style={{ color: 'white' }}>COMPLETED</h2>
                        </div>
                        <div className='todo-lists'>
                            <ul className='todo-container' >
                                {props.completedTodos.map(todo => (
                                    <li 
                                        className='todo'
                                        key={todo.id}
                                    >
                                        <label htmlFor='items'>
                                            <input

                                                type='checkbox'
                                                checked={todo.completed}
                                                onChange={() => props.handleComplete(todo)}
                                            />
                                            {todo.name}
                                        </label>
                                        <span >
                                            <span onClick={() => props.handleDelete(todo)}>
                                                <FontAwesomeIcon icon={faTrash} className='icons-delete' />
                                            </span>
                                            <span >
                                                <FontAwesomeIcon onClick={() => props.handleFlag(todo)} icon={faFlag} className='icons-flag' />
                                            </span>

                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
                {props.important && (
                    <div>
                        <div>
                            <h2 style={{ color: 'white' }}>IMPORTANT LIST</h2>
                        </div>
                        <div className='todo-lists'>
                            <ul className='todo-container'

                            >
                                {props.importantTodos.map(todo => (
                                    <li className='todo'
                                        key={todo.id}


                                    >
                                        <label htmlFor='items'>
                                            <input

                                                type='checkbox'
                                                checked={todo.completed}
                                                onChange={() => props.handleComplete(todo)}
                                            />
                                            {todo.name}
                                        </label>
                                        <span >
                                            <span onClick={() => props.handleDelete(todo)}>
                                                <FontAwesomeIcon icon={faTrash} className='icons-delete' />
                                            </span>
                                            <span >
                                                <FontAwesomeIcon onClick={() => props.handleFlag(todo)} className='icons-flag' icon={faFlag} />
                                            </span>

                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default TodoComponent;