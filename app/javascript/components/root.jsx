import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Helloo from '../javascripts/hello'
import Style from './hello_react.scss'

const Hello = props => (
  <div>
    <div className={Style.hoge}>Hello {props.name}!</div>
    <Helloo />
  </div>
)

Hello.defaultProps = {
  name: ''
}

Hello.propTypes = {
  name: PropTypes.string
}

export default Hello
