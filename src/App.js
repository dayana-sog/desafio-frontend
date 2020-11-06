import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider, Context } from './Context';

import Home from './pages/Home';

import GlobalStyles from './styles/global';

function App() {
  const test = useContext(Context);

  console.log(test);

  return (
    <Provider>
      <Router>
        <Home />
        <GlobalStyles />
      </Router>
    </Provider>
  );
}

export default App;
