import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from 'components/app';
import configureStore from 'store/configureStore';

const initialState = window.INITIAL_STATE;

let store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
