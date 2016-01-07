'use strict';

import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

const AppComponent = React.createClass({

    propTypes: {
        test: React.PropTypes.string.isRequired,
    },

    render() {
        return (
            <div>
                {this.props.test.foo}
                hi
            </div>
        );
    },

});

export default AppComponent;
