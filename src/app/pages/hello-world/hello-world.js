import styles from './hello-world.scss'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class HelloWorld extends React.Component {
  render() {
    return <div styleName='hello-world'>
      Hello World!
    </div>
  }
}
