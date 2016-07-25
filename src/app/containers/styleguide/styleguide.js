import styles from './styleguide.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import Swatch from '../../components/swatch/swatch.js'

const Typography = props => {
  return <div className={`${styles.type}`}>
    <div className={`${styles.section}`}>
      <h1>Header 1</h1>
      <div className={`${styles.header1}`}>Header 1</div>
      <div className='h1'>Header 1</div>
    </div>
    <div className={`${styles.section}`}>
      <h2>Header 2</h2>
    </div>
    <div className={`${styles.section}`}>
      <h3>Header 3</h3>
    </div>
    <div className={`${styles.section}`}>
      <h4>Header 4</h4>
    </div>
    <div className={`${styles.section}`}>
      <div className={`${styles.light}`}>Light Text</div>
      <div>Regular Text</div>
      <div className={`${styles['semi-bold']}`}>Semi-Bold Text</div>
      <div className={`${styles.bold}`}>Bold Text</div>
      <a href='#'>Link</a>
      <div>
        Amet labore placeat magnam aut voluptates aliquam, quaerat expedita
        earum! Corrupti cupiditate velit perferendis repellat nobis asperiores
        quaerat nostrum reiciendis! Doloremque ducimus debitis exercitationem
        quia pariatur. Vero expedita asperiores similique!
      </div>
    </div>
  </div>
}

const Colors = props => {
  const rows = [
    [
      'dark1',
      'dark2',
      'dark3',
      'dark4',
      'dark5',
      'dark6',
      'dark7',
      'dark8',
    ],
    [
      'blue1',
      'blue2',
      'blue3',
      'blue4',
      'blue5',
      'blue6',
    ],
    [
      'green1',
      'green2',
      'green3',
      'green4',
      'green5',
      'green6',
    ],
    [
      'red1',
      'red2',
      'red3',
      'red4',
      'red5',
      'red6',
    ],
    [
      'yellow1',
      'yellow2',
      'yellow3',
      'yellow4',
      'yellow5',
      'yellow6',
    ],
    [
      'turquoise1',
      'turquoise2',
      'turquoise3',
      'turquoise4',
      'turquoise5',
      'turquoise6',
    ],
    [
      'paper',
      'skin',
      'paperbag',
      'pumpkin',
      'pink',
      'peach',
      'peach2',
      'tan',
    ],
    [
      'dark-alt1',
      'dark-alt2',
      'dark-alt3',
      'red-alt1',
      'purple',
    ],
  ]

  return <div>
    {rows.map((row, i) => {
      return <div className={`${styles['color-row']}`}
        key={i}
      >
        {row.map((colorName, j) => {
          return <Swatch key={j}
            colorName={colorName} />
        })}
      </div>
    })}
  </div>
}

class Styleguide extends Component {
  render() {
    return <div styleName='styleguide'>
      <div styleName='big section'>
        <Typography />
      </div>

      <div styleName='big section'>
        <Colors />
      </div>
    </div>
  }
}

export default CSSModules(Styleguide, styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
