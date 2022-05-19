import React, { PureComponent } from 'react'

class EditTodoForm extends PureComponent {
	constructor(props) {
		super(props)
		this.state={
			task: this.props.todo.task,
			id: this.props.todo.id
		}
		this.handleChange=this.handleChange.bind(this)
		this.handleSubmit=this.handleSubmit.bind(this)
	}
	handleChange(e) {
		this.setState({ task: e.target.value })
	}
	handleSubmit(e) {
		e.preventDefault()
		this.props.save({
			task: this.state.task,
			id: this.state.id
		})
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit} className='Todo-form'>
				<label htmlFor='task'>Edit task:</label>
				<input
					onChange={this.handleChange}
					name='task'
					value={this.state.task}
					id={this.state.id}
					type="text" />
				<button className='Todo-button-edit'>Save</button>
			</form>
		)
	}
}

export default EditTodoForm