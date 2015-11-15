import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

const Navbar = React.createClass({

    getInitialState() {
        return {
            text: 'Hello this is some random text.',
        };
    },

    componentDidMount() {

    },

    componentWillUnmount() {

    },

    render() {
        return (
            <div className="navbar white-bg shadow" style={{
                position: 'absolute',
                display: 'flex',
                left: '0',
                right: '0',
                padding: '0px 10px',
                zIndex: '700',
            }}>
                <div className="row grow1">
                    <div className="item hint m-pad">
                        {this.state.text}
                    </div>

                    <div className="end">
                        <div className="item s-margin">
                            {/* <img src="img/icon.png" style={{width: '30px'}}/> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    },

});

export default Navbar;
