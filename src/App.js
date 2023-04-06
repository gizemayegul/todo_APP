import React from 'react';
import TodoComponent from './components/TodoComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
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
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
}
function App() {
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
  return (
    <div >
      <Header/>
      <TodoComponent
      handleAdd={handleAdd}
      handleComplete={handleComplete}
      handleDelete={handleDelete}
      handleNewTodo={handleNewTodo}
      completedTodos={completedTodos}
      notCompletedTodos={notCompletedTodos}
      item={item}
      setItem={setItem}

      />
      <Footer/>
      <Sidebar/>
    </div>
  );
}

export default App;
