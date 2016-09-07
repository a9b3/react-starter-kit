import styles from './not-found.scss'
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class NotFoundContainer extends Component {
  render() {
    return (
      <div styleName='not-found'>
        <div>
          <h1>Whoops!</h1>
          <h4>Page Not Found</h4>
        </div>
      </div>
    )
  }
}
