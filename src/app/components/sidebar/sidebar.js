import styles from './sidebar.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

class Sidebar extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  state = {

  }

  constructor() {
    super()
  }

  render() {
    return <div styleName='sidebar'>
      Hello World!
    </div>
  }
}

export default CSSModules(Sidebar, styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
