import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { Component } from 'react'

class App extends Component {

  state = {
    todos: [
      {id: 1, title: "First Todo", content: "I have a todo", urgent: true},
      {id: 2, title: "Second Todo", content: "I have another todo", urgent: false},
      {id: 3, title: "Third Todo", content: "I have a lot of todos", urgent: true},
    ]
  }

  addTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({todos})
  }

  render(){
    return (
      <div className="App">
        <h1>Todo App</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList deleteTodo={this.deleteTodo} todos ={this.state.todos}/>
      </div>
    );
  }
}

export default App;
