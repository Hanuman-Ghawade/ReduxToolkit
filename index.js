/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import store from './src/redux/store/store';
//import store from './src/reduxToolkit/store/store';
//import store from './src/reduxCRUD/store/store';
//import store from './src/reduxLogin/store/store';
//import store from './src/reduxThunk/store/store';

//import {Provider} from 'react-redux';
import React from 'react';
//import store from './src/reduxCRUD./store/store';

// const RNRedux = () => (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

AppRegistry.registerComponent(appName, () => App);
