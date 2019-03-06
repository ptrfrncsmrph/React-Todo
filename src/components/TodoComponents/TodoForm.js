import React from "react"
import "./TodoForm.css"

const TodoForm = ({
  query,
  handleQueryChange,
  handleSubmit,
  clearCompleted,
  toggleShowCompleted,
  showCompleted
}) => {
  const textInput = React.createRef()
  return (
    <div className="form">
      <form
        onSubmit={e => {
          e.preventDefault()
          handleSubmit(textInput.current.value)
          textInput.current.value = ""
        }}
      >
        <label>
          Add todo
          <input ref={textInput} type="text" defaultValue="Add todo" />
        </label>
        <button>Add Todo</button>
      </form>
      <button onClick={toggleShowCompleted} type="button">
        {showCompleted ? "Hide Completed" : "Show Completed"}
      </button>
      <button onClick={clearCompleted} type="button">
        Clear Completed
      </button>

      <label>
        Filter todos
        <input value={query} onChange={handleQueryChange} type="text" />
      </label>
    </div>
  )
}

export default TodoForm
