import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';

import App from 'components/app';
import Reducers from 'reducers';

const initialState = window.INITIAL_STATE;

let loggerMiddleware = createLogger();
let createStoreWithMiddleware = applyMiddleware(
    loggerMiddleware
)(createStore);

let store = createStoreWithMiddleware(Reducers(initialState));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
