import React from "react"

const Todo = props => (
  <li
    onClick={props.handleClick}
    className={props.completed ? "completed" : ""}
  >
    {props.task}
  </li>
)

export default Todo
