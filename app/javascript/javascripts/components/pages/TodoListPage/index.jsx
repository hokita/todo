import React from 'react'
import style from './style.scss'

const TodoItem = (props) => {
  return (
    <li key={props.todo.id}>
      <label>
        <input type="checkbox"
          checked={props.todo.isDone}
          onChange={() => props.checkTodo(props.todo)}
        />
        <span className={props.todo.isDone ? style.done : ''}>
          {props.todo.title}
        </span>
      </label>
    </li>
  )
}

const TodoList = (props) => {
  const todos = props.todos.map(todo => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        checkTodo={props.checkTodo}
      />
    )
  })
  return (
    <ul>
      {todos}
    </ul>
  )
}

export default class TodoListPage extends React.Component {
  constructor() {
    const todos = [
      { id: 0, title: 'Task 0', isDone: false },
      { id: 1, title: 'Task 1', isDone: false },
      { id: 2, title: 'Task 2', isDone: true }
    ]

    super()
    this.state = {
      todos: todos
    }
    this.checkTodo = this.checkTodo.bind(this)
  }

  checkTodo(todo) {
    const todos = this.state.todos.map(todo => {
      return { id: todo.id, title: todo.title, isDone: todo.isDone }
    })

    const pos = this.state.todos.map(todo => {
      return todo.id
    }).indexOf(todo.id)

    todos[pos].isDone = !todos[pos].isDone

    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className={style.container}>
        <h1>Todo</h1>
          <TodoList
            todos={this.state.todos}
            checkTodo={this.checkTodo}
          />
      </div>
    )
  }
}
