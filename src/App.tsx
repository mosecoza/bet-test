import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from './redux/reducers';
import Navigation from './screens/Navigation';


export default  function App() {

  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunkMiddleware)));
  return (
    
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
