import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';

const Sidebar = React.createClass({

    getInitialState() {
        return {};
    },

    componentDidMount() {

    },

    componentWillUnmount() {

    },

    render() {
        let sidebarStyle = {
            width: this.props.width || '200px',
            zIndex: '999',
            position: 'absolute',
            top: '0',
            bottom: '0',
        };

        const header = (
            <div className="row center" style={{
                height: '65px',
            }}>
                <div className="item">
                </div>
            </div>
        );

        const links = this.props.links && this.props.links.map(link => (
            <Link className="row link hover s-pad"
                activeClassName="active"
                to={link.src}>
                <div className="item">
                    {link.display}
                </div>
                <div className="end">
                    <div className="item">
                        {link.icon}
                    </div>
                </div>
            </Link>
        ));

        return (
            <div className="dark3-bg dark5-color col right-shadow sidebar" style={sidebarStyle}>
                {header}
                {links}

                <div className="end dark2-bg">
                    <div className="row">
                        <div className="grow1 row hover center m-pad">
                            <div className="item">
                                <i className="fa fa-github"></i>
                            </div>
                        </div>
                        <div className="grow1 row hover center m-pad">
                            <div className="item">
                                <i className="fa fa-github"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },

});

export default Sidebar;
