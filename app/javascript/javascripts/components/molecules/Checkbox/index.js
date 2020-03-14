import React from 'react'
import styles from './styles.scss'

const Checkbox = ({
  children,
  onChange,
  isChecked = false,
  ...props
}) => (
  <React.Fragment>
    <input type="checkbox"
      name="checkbox01[]"
      className={ styles.checkbox01_input }
      checked={isChecked}
      onChange={ onChange }
      { ...props }
    />
    <span className={ styles.checkbox01_parts }>
      { children }
    </span>
  </React.Fragment>
)

export default Checkbox
