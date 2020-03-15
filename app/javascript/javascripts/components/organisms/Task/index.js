import React from 'react'
import styles from './styles.scss'
import Checkbox from '../../molecules/Checkbox'
import { PenIcon, TrashIcon } from '../../atoms/Icon'

const Task = ({
  title,
  isChecked,
  onChange,
  onClickPen,
  onClickTrash,
  ...props
}) => (
  <div className={ styles.task }>
    <label>
      <Checkbox
        isChecked={ isChecked }
        onChange={ onChange }>
        { title }
      </Checkbox>
      <PenIcon
        className={ styles.pen_icon }
        onClick={ onClickPen }
      />
      <TrashIcon
        className={ styles.trash_icon }
        onClick={ onClickTrash }
      />
    </label>
  </div>
)

export default Task
