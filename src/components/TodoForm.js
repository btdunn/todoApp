import { Component } from 'react'

const initialState = {
  title: "",
  content: "",
  urgent: false,
  done: false
}

export default class TodoForm extends Component {
  
  state = initialState
  
  render(){
    return (
      <form className="todo-form" action="">
        <h2>Create a Todo</h2>
        <label>Title</label>
        <input type="text" name="title"/>
        <label>Content</label>
        <input type="text" name="content"/>
        <label>Urgent</label>
        <input type="checkbox" name="urgent"/>
        <input type="submit"/>
      </form>
    )
  }
}