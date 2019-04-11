import React, { Component } from 'react';

class TodoForm extends Component {
  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({ text: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault()
    const { text } = this.state
    this.props.addTask(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    const isEnabled = this.state.text.length > 0
    return (
      <form style={styles.todoForm} onSubmit={this.handleSubmit}>
        <input style={styles.inputText} type="text" placeholder='enter tasks' value={this.state.text} onChange={this.handleChange} />
        <input disabled={!isEnabled} type="submit" />
      </form>
    )
  }
}
const styles = {
  todoForm: {
    textAlign: 'center',
    marginTop: '50px'
  },
  inputText: {
    fontFamily: 'Roboto Mono'
  }
}

export default TodoForm;