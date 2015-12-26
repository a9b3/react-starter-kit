import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

const test = {
    html: `
    <div>
        hi
        watsup
    </div>
    `,
};

const Test = React.createClass({

    getInitialState() {
        return {};
    },

    componentDidMount() {

    },

    componentWillUnmount() {

    },

    render() {
        return (
            <div>

                <span dangerouslySetInnerHTML={{__html: test.html}} />
                {test.html}

            </div>
        );
    },

});

export default Test;
