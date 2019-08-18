import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from './Todo-list';

const App =() => {
  let [todos, setTodos] = React.useState([
    {id : 1, completed: false, title:'Купить хлеб' },
    {id : 2, completed: false, title:'Купить масло' },
    {id : 3, completed: false, title:'Купить молоко' },
  ])

  let toggleTodo = (id) =>{
    setTodos(
      todos = todos.map(todo =>{
        if (todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })

    )


  }
    return (
      <div className="App">
        <Todolist todos={todos} onTogle = {toggleTodo} />
      </div>
    );

  }
  

export default App;
