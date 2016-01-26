'use strict';

import './todos.scss';
import React, { PropTypes } from 'react';

const todosComponent = props =>
<div className="todos">
  {props.todos.map((todo, i) => (
    <div className="todo"
      key={i}
      onClick={props.remove.bind(null, i)}>
      {todo}
    </div>
  ))}
</div>;

todosComponent.propTypes = {
  // https://facebook.github.io/react/docs/reusable-components.html
  // ex:
  // foo: React.PropTypes.string.isRequired
  todos: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  remove: React.PropTypes.func.isRequired,
};
export default todosComponent;
