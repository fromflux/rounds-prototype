import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import reducer from './reducers';

import App from './containers/App';
import NotFound from './components/NotFound';
import Home from './containers/Home';
import Products from './containers/Products';
import History from './containers/History';
import Order from './containers/Order';
import Location from './containers/Location';

const loggerMiddleware = createLogger();

const store = createStore(
  combineReducers({
    reducer,
    routing: routerReducer
  }),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="products" component={Products} />
        <Route path="history" component={History} />
        <Route path="order" component={Order} />
        <Route path="location" component={Location} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('root')
);