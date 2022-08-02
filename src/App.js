import React from 'react'
import TodoList from './TodoList';
import AddTodo from './AddTodo';



export default class App extends React.Component {

  state = {
    todos:[
      {id: 1, title: 'react', done: false},
      {id: 2, title: 'angular', done: false},
      {id: 3, title: 'vue', done: true}
    ]
  };


  addTodo = title => {
    let todos = this.state.todos;
    const todo = {
      id: Date.now(),
      title: title,
      done: false
    };

    todos.push(todo);
    this.setState({todos});
  }

  removeTodo = id => {
    let todos = this.state.todos;
    todos = todos.filter(el => el.id !== id);
    this.setState({todos});
  }

  doneTodo = id => {
    const todos = this.state.todos;
    todos.map(el => {
      if (el.id === id) {
        el.done = !el.done;
      }

      return el;
   } )


   this.setState(todos)
  }

  render() {
    return (
    <div className='App'>
      <AddTodo
        addTodo = {this.addTodo}
      />
      <TodoList 
          todos = {this.state.todos}
          removeTodo = {this.removeTodo}
          doneTodo = {this.doneTodo}
      />
    </div>
    );
  }

}