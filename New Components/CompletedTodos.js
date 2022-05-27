import React from 'react'

function CompletedTodosBtn(props) {
  return (
    <div>
      <button onClick={props.setComplete} > Mark Complete </button>
    </div>
  )
}

export default CompletedTodosBtn