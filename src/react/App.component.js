'use strict';

import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import style from './App.css';

const AppComponent = React.createClass({

    propTypes: {
        test: React.PropTypes.string.isRequired,
    },

    render() {
        return (
            <div className={style.app}>
                {this.props.test.foo}
                hi
            </div>
        );
    },

});

export default AppComponent;