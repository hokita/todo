import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import TaskList from './index'

storiesOf('TaskList', module)
  .add('タスクリスト', () => {
    const tasks=[{
      id: 1,
      title: 'タイトル1',
      isDone: false
    },{
      id: 2,
      title: 'タイトル2',
      isDone: false
    }]
    return (
      <TaskList
        tasks={ tasks }
        onChange={ () => {} }
        onClickPen={ action('ペンアイコンがクリックされました') }
        onClickTrash={ action('トラッシュアイコンがクリックされました') }
      />
    )
  })
  .add('タスクリスト(checked)', () => {
    const tasks=[{
      id: 1,
      title: 'タイトル1',
      isDone: true
    },{
      id: 2,
      title: 'タイトル2',
      isDone: true
    }]
    return (
      <TaskList
        tasks={ tasks }
        onChange={ () => {} }
        onClickPen={ action('ペンアイコンがクリックされました') }
        onClickTrash={ action('トラッシュアイコンがクリックされました') }
      />
    )
  })
