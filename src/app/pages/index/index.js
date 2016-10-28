import styles from './index.scss'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class Index extends React.Component {
  render() {
    return <div styleName='index'>
      Hello World!
    </div>
  }
}
