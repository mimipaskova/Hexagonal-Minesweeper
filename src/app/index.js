import './assets/css/main.pcss';
import './assets/images/react-redux.png';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Start from './containers/start';

const render = (Component, id) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById(id)
  );
};

render(Start, 'app');
