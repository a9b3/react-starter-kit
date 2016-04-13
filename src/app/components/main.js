/*
 * Top level container
 * Purpose is to house init logic and top level components (eg. toasts)
 */
import React, { Component, PropTypes } from 'react'

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
    return new Promise((resolve, reject) => {
      // init logic here
      // call this.setState once everything is done
      setTimeout(() => {
        resolve()
        this.setState({
          ready: true,
        })
      }, 500)
    })
  }

  render() {
    const {
      ready,
    } = this.state

    return (!ready) ? <div className="loading">
      <i className="fa fa-spinner fa-spin"></i>
    </div> : <div>
      {this.props.children}
    </div>
  }
}
