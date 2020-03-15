import React from 'react'
import styles from './styles.scss'
import Task from '../Task'

const TaskList = ({
  tasks,
  onChange,
  onClickPen,
  onClickTrash
}) => {
  const taskList = tasks.map(task => (
    <li key={task.id}>
      <Task
        title={ task.title }
        isChecked={ task.isDone }
        onChange={ () => onChange(task) }
        onClickPen={ onClickPen }
        onClickTrash={ onClickTrash }
      />
    </li>
  ))

  return (
    <ul className={ styles.taskList }>
      { taskList }
    </ul>
  )
}

export default TaskList
