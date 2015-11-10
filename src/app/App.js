import React from 'react';
import store from './store.js';
import { Router, Route, Link } from 'react-router';

const App = React.createClass({

    getInitialState() {
        return store.getState();
    },

    componentDidMount() {
        store.subscribe(this._onChange);
    },

    _onChange() {
        this.setState(store.getState());
    },

    render() {
        return (
            <div>
                Hello World!
            </div>
       );
    },

});

module.exports = App;
