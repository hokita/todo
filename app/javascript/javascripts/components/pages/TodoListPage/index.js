import React from 'react'
import styles from './styles.scss'

const TodoItem = (props) => {
  return (
    <li key={props.todo.id} className={styles.chk_box}>
      <label>
        <input type="checkbox"
          name="checkbox01[]"
          className={styles.checkbox01_input}
          checked={props.todo.isDone}
          onChange={() => props.checkTodo(props.todo)}
        />
        <span className={styles.checkbox01_parts}>
          {props.todo.title}
        </span>
        <i className={"fas fa-pen " + styles.pen_button}></i>
        <i className={"fas fa-trash-alt " + styles.trash_button}></i>
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
    <div className={styles.tasks_area}>
      <div className={styles.ongoing_area}>
        <h2>ongoing</h2>
        <ul>
          {todos}
        </ul>
      </div>
      <div className={styles.done_area}>
        <h2>done</h2>
        <ul>
          {todos}
        </ul>
      </div>
    </div>
  )
}

export default class TodoListPage extends React.Component {
  constructor() {
    const todos = [
      { id: 0, title: 'わさびの掃除', isDone: false },
      { id: 1, title: 'ペンタブ開ける', isDone: false },
      { id: 2, title: 'からしの餌やり', isDone: true }
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
      <div className={styles.container}>
        <header>
          <h1>Todo</h1>
          <a className={styles.add_button}>+</a>
        </header>
        <TodoList
          todos={this.state.todos}
          checkTodo={this.checkTodo}
        />
      </div>
    )
  }
}
