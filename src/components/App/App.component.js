'use strict';

import './app.scss';

import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

const AppComponent = React.createClass({

  propTypes: {
    test: React.PropTypes.object.isRequired,
  },

  render() {
    return (
      <div className="app">
        Hello World!
      </div>
    );
  },

});

export default AppComponent;
