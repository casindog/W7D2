import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import rootReducer from '../reducers/root_reducer';


const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);


export default Root;