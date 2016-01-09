'use strict';

import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import style from './rcomp.css';

const rcomp = React.createClass({

    render() {
        return (
            <div className={style.rcomp}>
                rcomp
            </div>
        );
    },

});

export default rcomp;
