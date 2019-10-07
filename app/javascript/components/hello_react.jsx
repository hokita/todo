// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

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

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Hello name="React" />,
//     document.body.appendChild(document.createElement('div')),
//   )
// })

export default Hello
