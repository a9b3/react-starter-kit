'use strict';

import './app.scss';
import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import store from 'root/store.js';

import * as actions from 'root/actions.js';

import TodoComponent from 'components/todos/todos.component.js';
import Input from 'containers/input.container.js';

// reference function to unsubscribe from redux store
let unsubscribe;

const AppContainer = React.createClass({

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
    const exampleState = this.state.exampleState;

    const add = (text) => {
      store.dispatch(actions.exampleState.add(text));
    };

    const remove = (i) => {
      store.dispatch(actions.exampleState.remove(i));
    };

    return (
      <div className="app">
        <div className="box">
          <TodoComponent todos={exampleState.todos}
            remove={remove}>
          </TodoComponent>

          <Input add={add}>
          </Input>
        </div>
      </div>
    );
  },

});

export default AppContainer;
