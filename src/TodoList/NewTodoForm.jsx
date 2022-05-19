import React, { PureComponent } from 'react'
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends PureComponent {
  constructor(props) {
    super(props)
    this.state={
      task: ''
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.create({ task: this.state.task, id: uuidv4() })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className='Todo-form'>
        <label htmlFor='task'>Task:</label>
        <input
          type='text'
          onChange={this.handleChange}
          name='task'
          className='Todo-input'
          value={this.state.task} />
        <button className='Todo-button-ok'>Submit</button>
      </form>
    )
  }
}

export default NewTodoForm