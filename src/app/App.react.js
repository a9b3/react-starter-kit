import React from 'react';
import store from './store.js';
import Navbar from './Navbar.react.js';
import Sidebar from './Sidebar.react.js';
import Footer from './Footer.react.js';

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
        const links = [
            {
                src: 'main',
                display: 'Main',
            },
            {
                src: 'flex',
                display: 'Flex',
            },
            {
                src: 'test',
                display: 'Test',
            },
        ];

        return (
            <div className="row" style={{height: '100%'}}>
                <Sidebar
                    attrs={{
                        test: 'test',
                    }}
                    links={links}/>

                <div className="content">
                    {this.props.children}
                </div>
            </div>
       );
    },

});

export default App;
