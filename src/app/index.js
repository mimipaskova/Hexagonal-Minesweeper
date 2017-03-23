import './assets/css/main.pcss';
import './assets/images/react-redux.png';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Popup from 'react-popup';

import Start from './containers/start';
import Game from './containers/game';

const render = (Component, id) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById(id)
  );
};

render(Start, 'app');

ReactDOM.render(
    <Popup />,
    document.getElementById('root')
);
