import React, { Component } from 'react';


const TodoItem = (props) => {
  const { id, task, done } = props.toDo
  console.log(id)
  return (
    <>
      <div>
        <li style={styles.list} className={
          done
            ? 'done'
            : 'undone'
        } key={id}>
          {id} {task} {done}
          <button onClick={() => props.handleClick(id)} >
            X
          </button>
          <button onClick={() => props.deleteItem(id)}>Delete Item</button>
        </li>
      </div>
    </>
  )
}
const styles = {
  list: {
    fontFamily: 'Roboto Mono'
  }
}

export default TodoItem;