import React from "react"
import "./Todo.css"

const styles = {
  input: "input",
  label: "label"
}

const Todo = ({ handleChange, completed, id, task }) => {
  console.log(completed)
  return (
    <li className={completed ? "completed" : ""}>
      <input
        onChange={e => {
          handleChange(id, e.target.checked)
        }}
        type="checkbox"
        checked={completed}
        className={styles.input}
        id={id}
      />
      <label htmlFor={id} className={styles.label}>
        <span className={styles.span}>{task}</span>
      </label>
    </li>
  )
}

export default Todo
