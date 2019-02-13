import React from "react"
import Todo from "./Todo"

const TodoList = ({ todos, handleClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} handleClick={handleClick} {...todo} />
    ))}
  </ul>
)

export default TodoList
