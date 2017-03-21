import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import Routes from './Routes';
import './index.scss';

ReactDOM.render(
  <Routes history={ hashHistory } />,
  document.getElementById('app')
);
