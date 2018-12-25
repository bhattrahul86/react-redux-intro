import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './Counter';

const initialState = {
    count: 0
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <div>
  <Provider store = {store}>
    <Counter />
  </Provider>  
  </div>
);

render(<App />, document.getElementById('root'));