import React from 'react'

function PendingTodo(props) {
  return (
    <div>
      <input type="checkbox" checked = {props.checked} onChange = {props.toggleCheck} />
      {props.text}
      <button onClick={props.deleteTodo} > X </button>
    </div>
  )
}

export default PendingTodo