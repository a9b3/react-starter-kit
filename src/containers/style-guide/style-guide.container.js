'use strict';

import './style-guide.scss';
import React from 'react';

import StyleGuideCardComponent from './style-guide-card/style-guide-card.component.js';

class StyleGuideContainer extends React.Component {
  render() {
    return (
      <div className="style-guide">
        <StyleGuideCardComponent title={'typography'}>
          <div>
            <h1>Header 1</h1>
          </div>
          <div>
            <h2>Header 2</h2>
          </div>
          <div>
            <h3>Header 3</h3>
          </div>
          <div>
            <h4>Header 4</h4>
          </div>
          <div>
            <h5>Header 5</h5>
          </div>
          <div>
            <h6>Header 6</h6>
          </div>
          <hr/>
          <div>
            <p>
              Paragraph<br/><br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend
              velit id turpis fringilla volutpat. Nulla tristique sem ex, ac dignissim odio
              volutpat sit amet.
            </p>
          </div>
          <div>
            Normal text<br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend
            velit id turpis fringilla volutpat. Nulla tristique sem ex, ac dignissim odio
            volutpat sit amet.
          </div>
          <div>
            <br/>
            Small text<br/>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend
              velit id turpis fringilla volutpat. Nulla tristique sem ex, ac dignissim odio
              volutpat sit amet.
            </small>
          </div>
          <div>
            <b>b tag</b>
          </div>
          <div>
            <a href="#">a tag</a>
          </div>
          <div>
            <br/> Code <br/>
            <pre>
              <code>
                // hello
                const hi = 'hi';
              </code>
            </pre>
          </div>
        </StyleGuideCardComponent>

        <StyleGuideCardComponent title={'components'}>
          <div>
            <button>Button</button>
          </div>
          <hr/>
          <div>
            <form>
              <input type="text" placeholder="input"/>
            </form>
          </div>
        </StyleGuideCardComponent>

        <StyleGuideCardComponent title={'em padding'}>
          <div style={{
            fontSize: '2rem',
            padding: '2em',
          }}
            className="debug">
            <span className="debug">
              2 Rem Font
              2 Em Padding
            </span>
          </div>
          <div style={{
            fontSize: '1rem',
            padding: '2em',
          }}
            className="debug">
            <span className="debug">
              1 Rem Font
              2 Em Padding
            </span>
          </div>
        </StyleGuideCardComponent>
      </div>
    );
  }
}

export default StyleGuideContainer;
