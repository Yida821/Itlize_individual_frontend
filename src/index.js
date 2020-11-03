import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './store/reducers/auth';
import signupReducer from './store/reducers/signup';
import searchReducer from './store/reducers/search';
import productReducer from './store/reducers/product'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//非侵入式 monitor your store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  signup : signupReducer,
  search : searchReducer,
  product : productReducer
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));


const app = (
  <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>
);


ReactDOM.render(app,  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
