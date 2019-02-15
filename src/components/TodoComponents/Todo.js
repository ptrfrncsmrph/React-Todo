import React from "react"
import "./Todo.css"

const styles = {
  input: "input",
  label: "label"
}

const Todo = ({ handleChange, toggleTodo, completed, id, task }) => {
  const input = React.useRef()
  const [editMode, setEditMode] = React.useState(false)
  return (
    <li className={completed ? "completed" : ""}>
      <input
        onChange={e => {
          toggleTodo(id, e.target.checked)
        }}
        type="checkbox"
        checked={completed}
        className={styles.input}
        id={id}
      />
      <label htmlFor={id} className={styles.label}>
        {editMode ? (
          <input autoFocus type="text" ref={input} defaultValue={task} />
        ) : (
          <span>{task}</span>
        )}
      </label>
      {editMode ? (
        <button
          onClick={() => {
            handleChange(id, input.current.value)
            setEditMode(!editMode)
          }}
        >
          Submit
        </button>
      ) : (
        <button
          onClick={() => {
            setEditMode(!editMode)
          }}
        >
          Edit
        </button>
      )}
      <button onClick={() => {}}>Delete</button>
      <desc>Added yesterday</desc>
    </li>
  )
}

export default Todo
