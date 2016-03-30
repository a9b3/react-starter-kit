import React from 'react'
import CSSModules from 'react-css-modules'

class NotFoundContainer extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div styleName='not-found'>
        <div>
          <h1 className='bold'>Whoops!</h1>
          <h4 className='light'>Page Not Found</h4>
        </div>
      </div>
    )
  }
}

export default CSSModules(NotFoundContainer, styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
