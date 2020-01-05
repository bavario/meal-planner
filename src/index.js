import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ons from 'onsenui';
import 'onsenui/css/onsenui.css';

const rootElement = document.getElementById('root');

ons.ready(() => render(
    <App />,
    rootElement
));

/*ons.ready(() => render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  rootElement
));

if (module.hot) {
    module.hot.accept('./components/App', () => {
      const NextApp = require('./components/App').default;
      render(
        <AppContainer>
          <Provider store={store}>
            <NextApp />
          </Provider>
        </AppContainer>,
        rootElement
      );
    });
  }

ReactDOM.render(<App />, document.getElementById('root'));*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
