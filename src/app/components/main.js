/*
 * Top level container
 * Purpose is to house init logic and top level components (eg. toasts)
 */
import React, { Component, PropTypes } from 'react'

function init() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
}

export default class Main extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  constructor() {
    super()
    this.state = {
      ready: false,
    }
    this._init = this._init.bind(this)
  }

  async componentWillMount() {
    await this._init()
  }

  async _init() {
    await init()
    this.setState({
      ready: true,
    })
  }

  render() {
    const {
      ready,
    } = this.state

    return !ready
      ?
        <div className='loading'>
          <i className='fa fa-spinner fa-spin'></i>
        </div>
      :
        <div>
          Hello World
          {this.props.children}
        </div>
  }
}
