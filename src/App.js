import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from './Context';

import MainRoutes from './routes';

import GlobalStyles from './styles/global';

import history from './history';

function App() {

  return (
    <Provider>
      <Router history={history} >
        <MainRoutes />
        <GlobalStyles />
      </Router>
    </Provider>
  );
}

export default App;
