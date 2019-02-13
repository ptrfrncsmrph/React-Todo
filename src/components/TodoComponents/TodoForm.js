import React from "react"

// const TodoForm = ({ handleSubmit, handleClear }) => {
//   const textInput = React.createRef()
//   return (
//     <form onSubmit={e => handleSubmit(e, textInput.current.value)}>
//       <input ref={textInput} type="text" defaultValue="Add todo" />
//     </form>
//   )
// }

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ""
    }
  }
  render() {
    return (
      <form onSubmit={e => this.props.handleSubmit(e, this.state.input)}>
        <input
          type="text"
          value={this.state.input}
          onChange={e => this.setState()}
        />
      </form>
    )
  }
}

export default TodoForm
