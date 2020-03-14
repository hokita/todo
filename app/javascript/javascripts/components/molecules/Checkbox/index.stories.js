import React from 'react'
import { storiesOf } from '@storybook/react'
import Checkbox from './index'

storiesOf('Checkbox', module)
  .add('チェック無し', () => (
    <Checkbox
      onChange={ () => {} }
      isChecked={ false }>
      チェックボックス
    </Checkbox>
  ))
  .add('チェック有り', () => (
    <Checkbox
      isChecked={ true }
      onChange={ () => {} }>
      チェックボックス
    </Checkbox>
  ))
