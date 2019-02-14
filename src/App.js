import React from "react"

import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"

import "./App.css"

const filter = fn => xs => xs.filter(fn)
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)

const toRegExp = str => new RegExp(str, "ig")

class App extends React.Component {
  state = {
    query: "",
    showCompleted: true,
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

  toggleShowCompleted = () => {
    this.setState(({ showCompleted }) => ({
      showCompleted: !showCompleted
    }))
  }

  handleQueryChange = ({ target }) => {
    this.setState(() => ({
      query: target.value
    }))
  }

  render() {
    const { query, todos, showCompleted } = this.state
    return (
      <React.Fragment>
        <main>
          <TodoForm
            clearCompleted={this.clearCompleted}
            handleSubmit={this.addTodo}
            toggleShowCompleted={this.toggleShowCompleted}
            showCompleted={showCompleted}
            handleQueryChange={this.handleQueryChange}
            query={query}
          />
          <TodoList
            todoFilter={pipe(
              filter(({ task }) => toRegExp(query).test(task)),
              filter(({ completed }) => (showCompleted ? true : !completed))
            )}
            handleChange={this.toggleTodo}
            todos={todos}
          />
        </main>
        <pre>this.state = {JSON.stringify(this.state, null, 2)}</pre>
      </React.Fragment>
    )
  }
}

export default App
