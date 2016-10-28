import styles from './not-found.scss'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class NotFoundContainer extends React.Component {
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
