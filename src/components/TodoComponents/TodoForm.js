import React from "react"

const TodoForm = ({ handleSubmit, handleClear }) => {
  const textInput = React.createRef()
  return (
    <form
      onSubmit={e => {
        e.preventDefault(),
          handleSubmit(textInput.current.value),
          (textInput.current.value = "")
      }}
    >
      <input ref={textInput} type="text" defaultValue="Add todo" />
    </form>
  )
}

export default TodoForm
