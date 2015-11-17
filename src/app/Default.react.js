import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

const Default = React.createClass({

    getInitialState() {
        return {};
    },

    componentDidMount() {

    },

    componentWillUnmount() {

    },

    render() {
        return (
            <div className="col content">
                <div className="row center grid50 blue3-bg white-color">
                    <div className="row center grow1">
                        <div className="item grid20 m-pad">
                            <h1>Style guide</h1>
                        </div>

                        <div className="item grid40 m-pad">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend
                                velit id turpis fringilla volutpat. Nulla tristique sem ex, ac dignissim odio
                                volutpat sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend
                                velit id turpis fringilla volutpat. Nulla tristique sem ex, ac dignissim odio
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row grid50">
                    <div className="row center grid50" style={{minWidth: '400px'}}>
                        <div className="item">
                            Cool
                        </div>
                    </div>
                    <div className="row center grid50" style={{minWidth: '400px'}}>
                        <div className="item">
                            Man
                        </div>
                    </div>
                </div>
            </div>
        );
    },

});

export default Default;
