import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';

const sidebarStyle = {
    height: '100vh',
    width: '200px',
    zIndex: '999',
    position: 'fixed',
};

const Sidebar = React.createClass({

    getInitialState() {
        return {};
    },

    componentDidMount() {

    },

    componentWillUnmount() {

    },

    render() {
        const header = (
            <div className="row center">
                <div className="item l-pad">
                    <img src="img/icon.png" style={{width: '100px'}}/>
                </div>
            </div>
        );

        const links = this.props.links.map(link => (
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
            <div className="dark7-bg dark5-color col shadow sidebar" style={sidebarStyle}>
                {header}
                {links}

                <div className="end dark2-bg">
                    <div className="row">
                        <div className="grow1 row hover center m-pad">
                            hi
                        </div>
                        <div className="grow1 row hover center m-pad">
                            hi
                        </div>
                    </div>
                </div>
            </div>
        );
    },

});

export default Sidebar;
