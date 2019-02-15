import React from "react"
import "./Todo.css"

import toDate from "date-fns/toDate"
import formatDistance from "date-fns/formatDistance"

import { toRegExp, concatLR, zipWith } from "../../lib"

export const highlightMatches = str => query =>
  zipWith(concatLR)(str.split(query))(str.match(query)).map(s =>
    s.foldMap(t => <mark>{t}</mark>)
  )

const Todo = ({
  handleChange,
  deleteTodo,
  toggleTodo,
  completed,
  id,
  task,
  query
}) => {
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
        id={id}
      />
      <label htmlFor={id}>
        {editMode ? (
          <form onSubmit={handleSubmit}>
            <input autoFocus type="text" ref={input} defaultValue={task} />
          </form>
        ) : (
          <span>{query ? highlightMatches(task)(toRegExp(query)) : task}</span>
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
      <button
        onClick={() => {
          deleteTodo(id)
        }}
      >
        Delete
      </button>
      <div>Added {formatDistance(toDate(id), new Date())} ago</div>
    </li>
  )
}

export default Todo
