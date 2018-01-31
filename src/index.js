import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import promiseMiddleware from 'redux-promise';
import registerServiceWorker from './registerServiceWorker';

let storeWithMiddleWare = applyMiddleware(promiseMiddleware)(createStore);
let store = storeWithMiddleWare(rootReducer);
ReactDOM.render(<Provider store = {store}>
                <App />
                </Provider>, document.getElementById('root'));
registerServiceWorker();
