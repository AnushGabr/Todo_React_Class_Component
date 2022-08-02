import React from 'react'

const TodoItem = ({todo, removeTodo, doneTodo}) => {
  return (
    <div className={todo.done ? 'Todo done' : 'Todo'}>
        <span>{todo.title}</span>
        <i className='fas fa-check' onClick={() => doneTodo(todo.id)}></i>
        <i className='fas fa-trash ' onClick={() => removeTodo(todo.id )}></i>
    </div>
  )
}

export default TodoItem