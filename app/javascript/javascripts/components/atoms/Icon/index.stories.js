import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { PenIcon, TrashIcon } from './index'

storiesOf('Icon', module)
  .add('ゴミ箱アイコン', () => (
    <TrashIcon />
  ))
  .add('ゴミ箱アイコン(クリック可)', () => (
    <TrashIcon onClick={ action('アイコンがクリックされました') }/>
  ))
  .add('ペンアイコン(クリック可)', () => (
    <PenIcon onClick={ action('アイコンがクリックされました') }/>
  ))
