import React from 'react'
import styles from './styles.scss'
import TaskList from '../../organisms/TaskList'

const TodoList = (props) => (
  <div className={styles.tasks_area}>
    <div className={styles.ongoing_area}>
      <h2>ongoing</h2>
      <TaskList
        tasks={ props.todos }
        onChange={ (task) => props.checkTodo(task) }
        onClickPen={ () => {} }
        onClickTrash={ () => {} }
      />
    </div>
    <div className={styles.done_area}>
      <h2>done</h2>
      <TaskList
        tasks={ props.todos }
        onChange={ (task) => props.checkTodo(task) }
        onClickPen={ () => {} }
        onClickTrash={ () => {} }
      />
    </div>
  </div>
)

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
