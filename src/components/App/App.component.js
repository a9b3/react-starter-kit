'use strict';

import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import style from './App.css';

const AppComponent = React.createClass({

    propTypes: {
        test: React.PropTypes.object.isRequired,
    },

    render() {
        return (
            <div className={style.app}>
                Hello World!
            </div>
        );
    },

});

export default AppComponent;
