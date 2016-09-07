import styles from './hello-world.scss'
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class HelloWorld extends Component {
  render() {
    return <div styleName='hello-world'>
      Hello World!
    </div>
  }
}
