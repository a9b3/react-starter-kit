import styles from './shell.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import Sidebar from '../../components/sidebar/sidebar.js'

class Styleguide extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return <div styleName='container'>
      <div styleName='sidebar'>
        <Sidebar />
      </div>

      <div styleName='content'>
        {this.props.children}
      </div>
    </div>
  }
}

export default CSSModules(Styleguide, styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
