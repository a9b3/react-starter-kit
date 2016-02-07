'use strict';

import './not-found.scss';
import React from 'react';

class NotFoundContainer extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="not-found">
        <div className="not-found__wrapper">
          <h1 className="bold">Whoops!</h1>
          <h4 className="light">Page Not Found</h4>
        </div>
      </div>
    );
  }

}

export default NotFoundContainer;
