import React from 'react';
import TodoComponent from './components/TodoComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import { useReducer, useState } from "react";
import { v4 as uuid } from 'uuid';


const initialTodos = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuid(), name: action.payload, completed: false, flag: false }];
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
    case "FLAG":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, flag: !todo.flag }
        } else {
          return todo;
        }
      })
    default:
      return state;
  }
}
function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos)
  const [item, setItem] = useState('');
  const [important, setImportant] = useState(false);
  const [showTodo, setShowTodo] = useState(true);
  const [showCompleted, setShowCompleted] = useState(false);


  const handleShowImportant = () => {
    setImportant(true)
    setShowTodo(false)
    setShowCompleted(false)
  }

  const handleShowTodo = () => {
    setShowTodo(true)
    setImportant(false)
    setShowCompleted(false)
  }
  const handleShowCompleted = () => {
    setShowCompleted(true)
    setImportant(false)
    setShowTodo(false)
  }

  const handleShowAll = () =>{
    setImportant(true)
    setShowTodo(true)
    setShowCompleted(true)
  }

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

  const handleFlag = (todo) => {
    dispatch({ type: "FLAG", id: todo.id })
  }

  const completedTodos = todos.filter((todo => todo.completed === true));
  const notCompletedTodos = todos.filter((todo => todo.completed === false && todo.flag === false));
  const importantTodos = todos.filter((todo => todo.flag === true));
  return (
    <div className='App' >
      <Header />
      <TodoComponent {...{
        handleAdd,
        handleComplete,
        handleDelete,
        handleNewTodo,
        completedTodos,
        notCompletedTodos,
        importantTodos,
        item,
        setItem,
        handleFlag,
        handleShowImportant,
        important,
        handleShowTodo,
        handleShowCompleted,
        showTodo,showCompleted,
        handleShowAll
      }}
      />


    </div>
  );
}

export default App;
