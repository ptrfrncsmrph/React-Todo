import React from "react"
import Todo from "./Todo"

const TodoList = ({
  todos,
  filter,
  handleChange,
  deleteTodo,
  toggleTodo,
  query
}) => (
  <ul>
    {filter(todos).length
      ? filter(todos).map(todo => (
          <Todo
            key={todo.id}
            query={query}
            handleChange={handleChange}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            {...todo}
          />
        ))
      : "Nothing to show"}
  </ul>
)

export default TodoList
