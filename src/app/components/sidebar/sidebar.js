import styles from './sidebar.scss'
import React, { Component } from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules'

class Sidebar extends Component {
  renderItems(max) {
    const elems = []
    for (let i = 0; i < max; i++) {
      elems.push(
        <div styleName='item'>
          Item {i}
        </div>
      )
    }
    return elems
  }

  render() {
    return <div styleName='sidebar'>
      <div styleName='header item'>
        <div>
        <h4>Style</h4>
        <h4 className='light'>Guide</h4>
        </div>
      </div>

      <div styleName='body'>
        <div styleName='body-inner'>
          <Link styleName='item'
            to='/styleguide/general'
          >
            General
          </Link>

          <Link styleName='item'
            to='/styleguide/layout'
          >
            Layout
          </Link>
        </div>
      </div>

      <div styleName='end footer'>
        <div styleName='item'>
          Guide
        </div>
      </div>
    </div>
  }
}

export default CSSModules(Sidebar, styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
