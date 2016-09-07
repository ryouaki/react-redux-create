import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.less';

import { Provider } from 'react-redux';

import Reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Router, hashHistory } from 'react-router';

import Routes from './routes';

import MainMiddleWare from './middlewares/mainMiddleWare';

const createStoreWithMiddleware = applyMiddleware(
    MainMiddleWare
)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(Reducers) }>
        <Router history={hashHistory} routes={Routes}/>
    </Provider>,
    document.getElementById('root')
);