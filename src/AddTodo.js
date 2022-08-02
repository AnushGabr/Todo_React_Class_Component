import {useState} from 'react'

const AddTodo = ({addTodo}) => {

  const [input, setInput] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("")
  }

  return (
    <form className='AddTodo' onSubmit={submitHandler}>
      <input type='text' value={input} onChange = {(e) => setInput(e.target.value) }/>
      <button type='submit'>Add Todo</button>
    </form>
  )
}

export default AddTodo