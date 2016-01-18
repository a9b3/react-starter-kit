'use strict';

import './hello.scss';

import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

export default React.createClass({

  render() {
    return (
      <div className="hello">
        Hello World!
      </div>
    );
  },

});
