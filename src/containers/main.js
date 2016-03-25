import React, { Component } from 'react'

/*
 * Top level container
 * Purpose is to house init logic and top level components (eg. toasts)
 */
class Main extends Component {
  constructor() {
    super()
    this.state = {
      ready: false,
    }
    this._init = this._init.bind(this)
  }

  componentWillMount() {
    this._init()
  }

  _init() {
    // init logic here
    // call this.setState once everything is done
    setTimeout(() => {
      this.setState({
        ready: true,
      })
    }, 500)
  }

  render() {
    const {
      ready,
    } = this.state

    if (!ready) {
      return <div className="loading">
        <i className="fa fa-spinner fa-spin"></i>
      </div>
    } else {
      return <div>
        {this.props.children}
      </div>
    }
  }
}

export default Main
