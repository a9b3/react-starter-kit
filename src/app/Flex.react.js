import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import Sidebar from './Sidebar.react.js';

const Flex = React.createClass({

    getInitialState() {
        return {};
    },

    componentDidMount() {

    },

    componentWillUnmount() {

    },

    render() {
        return (
            <div className="s-wwrap m-pad white-bg" style={{
                minHeight: '100%',
            }}>
                <div className="m-pad">
                    <h3>Flex</h3>
                    <p>
                        There are two types of flex components, 'row' and 'col'.
                    </p>
                </div>

                <div className="m-pad">
                    <div className="row debug">
                        <div className="item s-pad debug">
                            item in row
                        </div>
                        <div className="item s-pad debug">
                            item
                        </div>
                        <div className="col debug" style={{
                            height: '300px',
                        }}>
                            <div className="row debug">
                                <div className="item s-pad">
                                    item in col
                                </div>
                            </div>
                            <div className="debug s-pad">
                                item
                            </div>

                            <div className="end">
                                <div className="debug s-pad">
                                    end item
                                </div>
                            </div>
                        </div>

                        <div className="col debug">
                            <div className="self-center debug s-pad">
                                hi
                            </div>
                        </div>

                        <div className="end">
                            <div className="item s-pad debug">
                                end item
                            </div>
                        </div>
                    </div>
                </div>

                <div className="m-pad">
                    <div className="row debug">
                        <div className="item grid50 debug">
                            grid50
                        </div>
                        <div className="item grid50 debug">
                            grid50
                        </div>
                    </div>
                    <div className="row debug">
                        <div className="item grid20 debug">
                            grid20
                        </div>
                        <div className="item grid20 debug">
                            grid20
                        </div>
                        <div className="item grid10 debug">
                            grid10
                        </div>
                        <div className="item grid50 debug">
                            grid50
                        </div>
                    </div>
                </div>

                <div className="m-pad">
                    <div className="content debug" style={{
                        height: '600px',
                    }}>
                        <Sidebar
                            width='100px'
                        />
                    </div>
                </div>
            </div>
        );
    },

});

export default Flex;
