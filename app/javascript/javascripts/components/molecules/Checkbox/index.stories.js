import React from 'react'
import { storiesOf } from '@storybook/react';
import Checkbox from './index';

storiesOf('Checkbox', module)
  .add('デフォルト', () => <Checkbox>チェックボックス</Checkbox>)

