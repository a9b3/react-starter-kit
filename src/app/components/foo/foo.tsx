import React, { Component, PropTypes } from 'react'
const styles = require('./foo.scss')
const CSSModules = require('react-css-modules')

interface Props {
  test: string,
}

class Foo extends Component<Props, {}> {
  state = {
    name: 'sam',
  }

  constructor() {
    super()
  }

  render() {
    return <div styleName="foo">
      {this.state.name} yo
    </div>
  }
}

export default CSSModules(Foo, styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
