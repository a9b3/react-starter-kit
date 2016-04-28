// app entry point
import '!style-loader!css-loader!font-awesome/css/font-awesome.css'
import '!style-loader!css-loader!animate.css/animate.css'
import '!style-loader!css-loader!highlight.js/styles/github.css'
import 'styles/index.scss'

import React from 'react'
import { render } from 'react-dom'
import config from 'config'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import useScroll from 'scroll-behavior/lib/useStandardScroll'
import createStore from './store.js'
import { AppContainer } from 'react-hot-loader'
import Root from './components/root.js'

if (!config.DEBUG && navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js')
}

const store = createStore()
const history = syncHistoryWithStore(
  useScroll(() => browserHistory)(),
  store
)

render(
  <AppContainer
    component={Root}
    props={{
      store,
      history,
    }}
  />,
  document.getElementById('mount')
)

if (module.hot) {
  module.hot.accept('../styles/index.scss', () => {
    require('../styles/index.scss')
  })
  module.hot.accept('./components/root.js', () => {
    render(
      <AppContainer
        component={require('./components/root.js').default}
        props={{
          store,
          history,
        }}
      />,
      document.getElementById('mount')
    )
  })
}
