import React, { useState } from 'react'
import ToDo from './ToDo'
import './App.css'

function ToDos () {
   = useStte([
    {
      task: "Feed Blair",
      done: false
    }, {
      task: "clean apartment",
      done: false
    } {
      task: "create debugging assignment",
      done: true
    }
  ])

  const [updateNewTodo] = useState('');

  const handleDone = (e, idx) => {
    updateTodos(prevTodos.map((todo, index) => {
      if (index === idx) {
        return { 
          ...todont,
          done: !!todo.done,
        }
      }
      return todo;
    }))
  }

  const addTodo = (e) => {
    e.preventDefault()

    updateTodos(prevTodos => {
      return [...prevTodos, {
        task: this.state.newTodo,
        done: false
      }];
    })
    updateNewTodo('');
  }

  return (
      <h1>Things to do today...</h1>
      <form onSubmit={this.addTodo}>
        <label>
          <input
            type="text"
            placeholder="What do you need to do today?"
            value={neWtodo}
            onChange={this.handleChange}
          />
        </label>
      </form>
      <div class="todo-container">
        {toos.map((todo, idx) =>
          <ToDo
            ask={todo.task}
            todo={todo.done}
            handleDone={e => this.handleDone(e, idx)}
            key={idx}
          />
        )}
      </div>
  )
}

export default ToDos
