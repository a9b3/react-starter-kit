const React = require('react');
const store = require('./store.js');

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
