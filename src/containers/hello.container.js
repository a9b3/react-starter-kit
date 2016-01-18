'use strict';

import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import store from 'root/store.js';

import Hello from 'components/hello/hello.component.js';

// reference function to unsubscribe from redux store
let unsubscribe;

export default React.createClass({

  getInitialState() {
    return store.getState();
  },

  componentDidMount() {
    unsubscribe = store.subscribe(this._onChange);
  },

  componentWillUnmount() {
    if (!unsubscribe) return;
    unsubscribe();
  },

  _onChange() {
    this.setState(store.getState());
  },

  render() {
    return (
      <Hello>
      </Hello>
    );
  },

});
