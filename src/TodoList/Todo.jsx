import React, { PureComponent } from 'react'
import './Todo.css'

class Todo extends PureComponent {
  constructor(props) {
    super(props)
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(e) {
    const className=e.target.className
    if (className.includes('delete')) {
      this.props.remove(this.props.todo)
    } else if (className.includes('edit')) {
      this.props.update(this.props.todo)
    }
  }
  render() {
    return (
      <li className='Todo-item' id={this.props.todo.id}>
        <div className='Todo-text'>{this.props.todo.task}</div>
        <div className='Todo-buttons'>
          <button onClick={this.handleClick}
            className='Todo-button-edit'>Edit</button>
          <button onClick={this.handleClick}
            className='Todo-button-delete'>X</button>
        </div>
      </li>
    )
  }
}

export default Todo