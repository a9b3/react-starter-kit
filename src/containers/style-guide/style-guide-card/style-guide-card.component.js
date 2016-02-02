'use strict';

import './style-guide-card.scss';
import React, { PropTypes } from 'react';

const StyleGuideCardComponent = props =>
<div className="style-guide__card">
  <div className="style-guide__card__header">
    <h2>
    {props.title}
    </h2>
  </div>
  <div className="style-guide__card__content">
    {props.children}
  </div>
</div>;

StyleGuideCardComponent.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
export default StyleGuideCardComponent;
