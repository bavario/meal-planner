import React from 'react';

import {
  Navigator
} from 'react-onsenui';

import Dashboard from './components/Dashboard';

const renderPage = (route, navigator) => (
  <route.component key={route.key} navigator={navigator} />
);

const App = () => (
  <Navigator
    renderPage={renderPage}
    initialRoute={{component: Dashboard, key: 'DASHBOARD'}}
  />
);

export default App;
