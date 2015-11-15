import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

const Footer = React.createClass({

    getInitialState() {
        return {};
    },

    componentDidMount() {

    },

    componentWillUnmount() {

    },

    render() {
        return (
            <div className="footer row dark7-bg">
                <div className="end">
                    <div className="item hint l-pad">
                        Created by Sam Lau
                    </div>
                </div>
            </div>
        );
    },

});

export default Footer;
