import React from 'react'
import TodoItem from './TodoItem';

const TodoList = (props) => {

    const elements = props.todos.map(
        (todo, index) => {
            return <TodoItem 
            key = {index} 
            todo = {todo} 
            removeTodo = {props.removeTodo} 
            doneTodo = {props.doneTodo} 
            />;
        });
  return (
    <div className='TodoList'>
        {elements}
    </div>
    
  )
}

export default TodoList