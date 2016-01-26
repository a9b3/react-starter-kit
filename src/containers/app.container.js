'use strict';

import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import store from 'root/store.js';

import { actions as exampleStateActions } from 'services/example-state.js';

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
      store.dispatch(exampleStateActions.add(text));
    };

    const remove = (i) => {
      store.dispatch(exampleStateActions.remove(i));
    };

    return (
      <div>
        <TodoComponent todos={exampleState.todos}
          remove={remove}>
        </TodoComponent>

        <Input add={add}>
        </Input>
      </div>
    );
  },

});

export default AppContainer;
