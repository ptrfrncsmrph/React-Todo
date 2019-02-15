import React from "react"
import Todo from "./Todo"

const TodoList = ({ todos, filter, handleChange, toggleTodo }) => (
  <ul>
    {filter(todos).length
      ? filter(todos).map(todo => (
          <Todo
            key={todo.id}
            handleChange={handleChange}
            toggleTodo={toggleTodo}
            {...todo}
          />
        ))
      : "Nothing to show"}
  </ul>
)

export default TodoList
