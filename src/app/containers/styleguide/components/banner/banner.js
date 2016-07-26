import styles from './banner.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

class Banner extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  }

  static defaultProps = {
    text: 'Banner',
  }

  render() {
    return <div styleName='banner'>
      <h1>
        {this.props.text}
      </h1>
    </div>
  }
}

export default CSSModules(Banner, styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
