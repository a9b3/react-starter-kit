'use strict';

const key = 'exampleState';

export const actions = {
  key,
  actions: {
    add(text) {
      exampleState.add(text);
      return {
        type: 'UPDATE_EXAMPLE',
      };
    },

    remove(i) {
      exampleState.remove(i);
      return {
        type: 'UPDATE_EXAMPLE',
      };
    }
  },
};

export const reducer = {
  key,
  reducer(state = exampleState, action) {
    switch(action.type) {
      case 'UPDATE_EXAMPLE':
        return Object.assign({}, state, exampleState);
      default:
        return state;
    }
  },
};

class ExampleState {
  constructor() {
    this.todos = [
      'Clean room',
      'Learn React',
    ];
  }

  add(text) {
    this.todos.push(text);
  }

  remove(i) {
    this.todos.splice(i, 1);
  }
};

const exampleState = new ExampleState();
export default exampleState;
