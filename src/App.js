import React from "react"

import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"

import "./App.css"

class App extends React.Component {
  state = {
    todos: [
      {
        task: "Organize Garage",
        id: 1528817077286,
        completed: false
      },
      {
        task: "Bake Cookies",
        id: 1528817084358,
        completed: false
      }
    ]
  }

  deleteTodos = ids => {
    this.setState(({ todos }) => ({
      todos: todos.filter(({ id }) => !ids.includes(id))
    }))
  }

  addTodo = task => {
    const newTodo = {
      task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  toggleTodo = (id, value) => {
    this.setState(({ todos }) => {
      const i = todos.findIndex(t => t.id === id)
      return {
        todos: [
          ...todos.slice(0, i),
          {
            ...todos[i],
            completed: value
          },
          ...todos.slice(i + 1)
        ]
      }
    })
  }

  clearCompleted = () => {
    this.setState(({ todos }) => ({
      todos: todos.filter(({ completed }) => !completed)
    }))
  }

  render() {
    return (
      <main>
        <TodoList handleChange={this.toggleTodo} todos={this.state.todos} />
        <TodoForm
          clearCompleted={this.clearCompleted}
          handleSubmit={this.addTodo}
        />
      </main>
    )
  }
}

export default App
