import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import App from 'components/app';
import reducers from 'reducers';

const initialState = window.INITIAL_STATE;
const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(
    loggerMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducers(initialState));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
