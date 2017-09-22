import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

import './less/antMotion_style.less';
import './../node_modules/antd/dist/antd.less';

import configureStore from './store/configureStore';
import IndexHome from './containers/IndexHome';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

const routerSet = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={IndexHome} />
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Provider store={store}>
    {routerSet()}
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
