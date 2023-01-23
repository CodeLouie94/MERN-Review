import React, { useState } from 'react'
import Form from './components/Form'
import Todo from './components/Todo'


function App() {
  const [todos, setTodos] = useState([])


  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const toDelete = id => {
    setTodos(todos.filter(a => todos.indexOf(a) !== id))
  }

  return (
    <div className="App">
      <Form addTodo = {addTodo}></Form>
      <ul>
      {
        todos.map((todo, i) => (
          <li>
            <Todo
          todo = {todo}
          done = {false}
          key = {i}
          id = {i}
          toDelete = {toDelete}
          />
          </li>
        ))
      }
      </ul>
      
    </div>
  );
}

export default App;
