'use strict';

import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import store from '../store.js';
import AppComponent from './App.component.js';

// reference function to unsubscribe from redux store
let unsubscribe;

const AppContainer = React.createClass({

    getInitialState() {
        return store.getState();
    },

    componentDidMount() {
        unsubscibe = store.subscribe(this._onChange);
    },

    componentWillUnmount() {
        if (!unsubscribe) return;
        unsubscribe();
    },

    _onChange() {
        this.setState(store.getState());
    },

    render() {

        return <AppComponent></AppComponent>;
    },

});

export default AppContainer;
