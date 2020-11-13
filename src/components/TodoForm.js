import { Component } from 'react'

const initialState = {
  title: "",
  content: "",
  urgent: false,
  done: false
}

export default class TodoForm extends Component {
  
  state = initialState
  
  handleChange = (event) => {
    let {name, value, checked} = event.target
    
    value = (name === "urgent") ? checked : value
    this.setState({
      [name] : value
    })
  }

  render(){
    const {title, content, urgent} = this.state
    return (
      <form className="todo-form" action="">
        <h2>Create a Todo</h2>
        <label>Title</label>
        <input type="text" name="title" value={title} onChange={this.handleChange}/>
        <label>Content</label>
        <input type="text" name="content" value={content} onChange={this.handleChange}/>
        <div className="urgent-input">
          <label>Urgent</label>
          <input type="checkbox" name="urgent"  checked={urgent} onChange={this.handleChange}/>
        </div>
        <input type="submit"/>
      </form>
    )
  }
}