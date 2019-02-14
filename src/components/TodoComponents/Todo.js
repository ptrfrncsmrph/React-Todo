import React from "react"
import "./Todo.css"

const styles = {
  input: "",
  label: ""
}

const Todo = ({ handleClick, completed, id, task }) => (
  <li onClick={() => handleClick(id)} className={completed ? "completed" : ""}>
    <input type="checkbox" className={styles.input} />
    <label htmlFor={id} className={styles.label}>
      <span className={styles.span}>{task}</span>
    </label>
  </li>
)

export default Todo
