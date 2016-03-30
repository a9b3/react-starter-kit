// app entry point
// styles
import '!style-loader!css-loader!font-awesome/css/font-awesome.css'
import '!style-loader!css-loader!animate.css/animate.css'
import '!style-loader!css-loader!highlight.js/styles/github.css'
import 'styles/index.scss'

import React from 'react'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { render } from 'react-dom'
import useScroll from 'scroll-behavior/lib/useStandardScroll'
import config from 'config'
import createStore from './store.js'
import Root from './containers/root.js'

// Global polyfill Promise
global.Promise = require('rsvp').Promise

if (!config.DEBUG && navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js')
}

import initialize from './initialize.js'

initialize()
.then(() => {
  const store = createStore()
  const history = syncHistoryWithStore(
    useScroll(() => browserHistory)(),
    store
  )

  render(
    <Root store={store} history={history} />,
    document.getElementById('mount')
  )
})
