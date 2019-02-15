import React from "react"
import Todo from "./Todo"

const TodoList = ({ todos, todoFilter: filter, handleChange }) => (
  <ul>
    {filter(todos).length
      ? filter(todos).map(todo => (
          <Todo key={todo.id} handleChange={handleChange} {...todo} />
        ))
      : "Nothing to show"}
  </ul>
)

export default TodoList
