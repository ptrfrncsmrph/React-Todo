import React from "react"

const TodoForm = ({ handleSubmit, clearCompleted }) => {
  const textInput = React.createRef()
  return (
    <React.Fragment>
      <form
        onSubmit={e => {
          e.preventDefault(),
            handleSubmit(textInput.current.value),
            (textInput.current.value = "")
        }}
      >
        <label>
          Add todo
          <input ref={textInput} type="text" defaultValue="Add todo" />
        </label>
        <button>Add Todo</button>
      </form>
      <button type="button">View Completed</button>
      <button onClick={clearCompleted} type="button">
        Clear Completed
      </button>

      <label>
        Filter todos
        <input type="text" />
      </label>
    </React.Fragment>
  )
}

export default TodoForm
