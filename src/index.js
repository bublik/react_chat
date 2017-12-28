import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import App from './App';
import root from './reducers/rootReducer'
import './css/App.css';
import registerServiceWorker from './registerServiceWorker';
//import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore (root, initialState = {}) {
  const store = createStore(
    root,
    initialState,
    //composeWithDevTools(applyMiddleware(thunk))
    applyMiddleware(thunk)
  )
  return store;
}

let store = configureStore(root);

ReactDOM.render(

  <Provider store={store}>
    <App store={store}/>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
