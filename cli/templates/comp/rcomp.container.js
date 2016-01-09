'use strict';

import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import store from 'root/store.js';

let unsubscribe;

const rcomp = React.createClass({

    getInitialState() {
        return store.getState();
    },

    componentDidMount() {
        unsubscribe = store.subscribe(this._onChange);
    },

    _onChange() {
        this.setState(store.getState());
    },

    componentWillUnmount() {
        if (unsubscribe) unsubscribe();
    },

    render() {
        return (
            <div>
                rcomp
            </div>
        );
    },

});

export default rcomp;
