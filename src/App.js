import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

class App extends Component {
  state = {
    todos: [

      // { id: 2, task: 'Water the flower', done: true }
    ]
  }

  addTask = text => {
    const toDoCopy = [...this.state.todos]
    const newTask = {
      id: toDoCopy.length + 1,
      task: text,
      done: false
    }

    toDoCopy.push(newTask)
    this.setState({ todos: toDoCopy })
    console.log(toDoCopy)
  }

  handleClick = index => {
    const { todos } = this.state
    const toDoCopy = [...this.state.todos]
    toDoCopy[index - 1].done = !toDoCopy[index - 1].done
    this.setState({
      todos: toDoCopy
    })
  }

  deleteItem = id => {
    const { todos } = this.state
    this.setState({
      todos: todos.filter(todo => todo.id != id)
    })
  }

  render() {
    return (
      <>
        <div style={styles.body}>
          <h1 style={styles.header}>The Most Minimal To-Do List (Ever)</h1>

          <div style={styles.form}>{this.state.todos.map(todo =>
            <TodoItem toDo={todo} handleClick={this.handleClick} deleteItem={this.deleteItem} />
          )}

            <TodoForm addTask={this.addTask} />
          </div>
        </div >
      </>
    )
  }
}
const styles = {
  header: {
    textAlign: 'center',
    fontFamily: 'Roboto Mono'
  },
  form: {
    textAlign: 'center'
  }

}

export default App;
