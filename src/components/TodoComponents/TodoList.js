import React from "react"
import Todo from "./Todo"

const TodoList = ({ todos, handleChange }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} handleChange={handleChange} {...todo} />
    ))}
  </ul>
)

export default TodoList
