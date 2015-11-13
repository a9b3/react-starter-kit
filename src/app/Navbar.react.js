import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

const Navbar = React.createClass({

    getInitialState() {
        return {};
    },

    componentDidMount() {

    },

    componentWillUnmount() {

    },

    render() {
        return (
            <div className="white-bg shadow">
                <div className="m-wwrap">
                    <div className="row">
                        <div className="item m-pad">
                            <h4>
                                Something
                            </h4>
                        </div>
                        <div className="end">
                            <div className="item m-pad">
                                end
                            </div>
                            <div className="item m-pad">
                                end
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },

});

export default Navbar;
