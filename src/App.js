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

  deleteTodo = deletedId => {
    this.setState(({ todos }) => ({
      todos: todos.filter(({ id }) => id !== deletedId)
    }))
  }

  addTodo = (event, task) => {
    event.preventDefault()
    // console.log(task)
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div>
        <TodoList handleClick={this.completeTodo} todos={this.state.todos} />
        <TodoForm handleSubmit={this.addTodo} />
      </div>
    )
  }
}

export default App
