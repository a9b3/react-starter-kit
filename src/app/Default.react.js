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
            <div className="row center content">
                <div className="item">
                    <div>
                        <div className="header xl-margin" style={{
                            maxWidth: '920px',
                        }}>
                            <h1 className="superbold">
                                Good design <br/>
                                is as little design <br/>
                                as possible.
                            </h1>
                        </div>


                        <div className="xl-margin">
                            <h4 className="normal">Dieter Rams</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    },

});

export default Default;
