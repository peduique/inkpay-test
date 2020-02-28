import { createStore } from 'redux';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return state + 1;
     default:
       return state;
  }
}

const store = createStore(counter);

export default store;