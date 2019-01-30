import React from 'react';
import ReactDOM from 'react-dom';
import './globalStyles.css';
import './globalStyles'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { RouteMap } from './routes';
import configureStore from './store/store'
import {Provider} from 'react-redux'

const store = configureStore()

const Root = (
    <Provider store={store}>
        <BrowserRouter>
            <RouteMap />
        </BrowserRouter>
    </Provider>
)
ReactDOM.render(Root, document.getElementById('root'));
serviceWorker.unregister();
