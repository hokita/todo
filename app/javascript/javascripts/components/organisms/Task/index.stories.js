import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Task from './index'

storiesOf('Task', module)
  .add('タスク', () => (
    <Task
      title="タイトル"
      isChecked={ false }
      onClickPen={ action('ペンアイコンがクリックされました') }
      onClickTrash={ action('トラッシュアイコンがクリックされました') }
    />
  ))
  .add('タスク(checked)', () => (
    <Task
      title="タイトル"
      isChecked={ true }
      onClickPen={ action('ペンアイコンがクリックされました') }
      onClickTrash={ action('トラッシュアイコンがクリックされました') }
    />
  ))
