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
            <Link className="row link s-pad seperator"
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
            <div className="dark3-bg dark4-color col shadow sidebar"
                style={sidebarStyle}>
                {header}
                {links}

                <div className="end dark2-bg">
                    <div className="row">
                        <a className="grow1 row hover center m-pad" href="https://github.com/esayemm">
                            <div className="item">
                                <i className="fa fa-github"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    },

});

export default Sidebar;
