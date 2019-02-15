import React from "react"
import "./Todo.css"

import toDate from "date-fns/toDate"
import formatDistance from "date-fns/formatDistance"

const styles = {
  input: "input",
  label: "label"
}

const Todo = ({ handleChange, toggleTodo, completed, id, task }) => {
  const input = React.useRef()
  const [editMode, setEditMode] = React.useState(false)
  const handleSubmit = () => {
    handleChange(id, input.current.value)
    setEditMode(!editMode)
  }

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
          <form onSubmit={handleSubmit}>
            <input autoFocus type="text" ref={input} defaultValue={task} />
          </form>
        ) : (
          <span>{task}</span>
        )}
      </label>
      {editMode ? (
        <button onClick={handleSubmit}>Submit</button>
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
      <div>Added {formatDistance(toDate(id), new Date())} ago</div>
    </li>
  )
}

export default Todo
