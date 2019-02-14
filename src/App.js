import React from "react"

import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"

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
    console.log(value)
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

  render() {
    return (
      <div>
        <TodoList handleChange={this.toggleTodo} todos={this.state.todos} />
        <TodoForm handleSubmit={this.addTodo} />
      </div>
    )
  }
}

export default App
