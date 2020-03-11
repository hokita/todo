import React from 'react'
import styles from './styles.scss'

const Checkbox = ({
  children,
  ...props
}) => (
  <React.Fragment>
    <input type="checkbox"
      name="checkbox01[]"
      className={ styles.checkbox01_input }
      checked="true"
      { ...props }
    />
    <span className={ styles.checkbox01_parts }>
      { children }
    </span>
  </React.Fragment>
)

export default Checkbox
