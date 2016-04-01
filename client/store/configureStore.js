import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import reducers from '../reducers';

let loggerMiddleware = createLogger();
let createStoreWithMiddleware = applyMiddleware(
    loggerMiddleware
)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(reducers(initialState));
}

