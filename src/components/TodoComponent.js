import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faFlag } from '@fortawesome/free-solid-svg-icons';



const TodoComponent = (props) => {

    return (
        <div className="todolist">
            <aside>
                <div>
                    <button onClick={props.handleShowAll}>
                        <span >All </span>
                    </button>
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

            </aside>
            <main className='main'>
                {props.showTodo && (<div>
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
                        <button type="submit" >
                            <span>+</span>
                        </button>
                    </form>
                    <div>
                        <div>
                            <h2 style={{color:'white'}}>TODO LIST</h2>
                        </div>
                        <div className='lists'>
                            <ul>
                                {props.notCompletedTodos.map(todo => (
                                    <li className='list'
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
                                                <FontAwesomeIcon icon={faTrash} />
                                            </span>
                                            <span onClick={() => props.handleFlag(todo)}>
                                                <FontAwesomeIcon icon={faFlag} />
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
                        <label class="todo-label" htmlFor='todo-list'>COMPLETED LIST</label>
                        <ul
                            id="todo-list"


                        >
                            {props.completedTodos.map(todo => (
                                <li

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
                                    <span >
                                        <span onClick={() => props.handleDelete(todo)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </span>
                                        <span >
                                            <FontAwesomeIcon onClick={() => props.handleFlag(todo)} icon={faFlag} />
                                        </span>

                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {props.important && (
                    <div>
                        <label class="todo-label" htmlFor='todo-list'>IMPORTANT LIST</label>
                        <ul
                            id="todo-list"


                        >
                            {props.importantTodos.map(todo => (
                                <li
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
                                    <span >
                                        <span onClick={() => props.handleDelete(todo)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </span>
                                        <span >
                                            <FontAwesomeIcon onClick={() => props.handleFlag(todo)} className='flag-icon' icon={faFlag} />
                                        </span>

                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </main>

        </div>
    );
};

export default TodoComponent;