import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/leaderBoardReducer';
import Routes from './Routes';
import './index.scss';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={ store } >
    <Routes history={ hashHistory } store={ store } />
  </Provider>,
  document.getElementById('app')
);
