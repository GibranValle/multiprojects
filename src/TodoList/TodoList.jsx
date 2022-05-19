import React, { PureComponent } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import EditTodoForm from './EditTodoForm';
import { v4 as uuidv4 } from 'uuid';


class TodoList extends PureComponent {
  constructor(props) {
    super(props)
    this.state=({
      todos: [
        { task: 'test task 1', id: uuidv4() },
        { task: 'test task 2', id: uuidv4() },
      ],
      updatedTodo: { task: '', id: '' },
      isEditing: false
    })
    this.createTodo=this.createTodo.bind(this)
    this.removeTodo=this.removeTodo.bind(this)
    this.updateMode=this.updateMode.bind(this)
    this.saveTodo=this.saveTodo.bind(this)
  }
  createTodo(todo) {
    this.setState(st => ({ todos: [...st.todos, todo] }))
  }
  updateMode(todo) {
    this.setState({ isEditing: true, updatedTodo: todo })
  }
  saveTodo(todo) {
    this.setState(st => {
      return {
        todos: st.todos.map(old => {
          if(old.id === todo.id) return {task: todo.task, id: todo.id}
          return old
        }),
        isEditing: false
      }
    })
  }
  removeTodo(todo) {
    const { id }=todo
    const newTodos=this.state.todos.filter(todo => {
      if (todo.id!==id) return todo
    })
    this.setState({ todos: newTodos })
  }
  render() {
    const todos=this.state.todos.map(todo => {
      return <Todo key={todo.id} todo={todo}
        update={this.updateMode} remove={this.removeTodo} />
    })

    return (
      <div className='component TodoList'>
        <h1>TODO List</h1>
        {this.state.isEditing?
          <EditTodoForm todo={this.state.updatedTodo} save={this.saveTodo} />:
          <div>
            <NewTodoForm create={this.createTodo} />
            <ul>
              {todos}
            </ul>
          </div>
        }
      </div>
    )
  }
}

export default TodoList