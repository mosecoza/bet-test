import React from 'react';
import {  Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from './redux/reducers';
import Auth from './screens/Auth/AuthPage';
import './App.css';
import bg from './assets/zebra-bushveld-unsplash.jpg'
import Navigation from './screens/Navigation';

function App({ loggedIn }: any) {

  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunkMiddleware)));
  return (<Provider store={store}>
    <Navigation/>
  </Provider>);
}


export default App;