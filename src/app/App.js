import React from 'react';
import store from './store.js';

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
                Hello World! ok no
            </div>
       );
    },

});

module.exports = App;
