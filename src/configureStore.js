import {createStore, applyMiddleware} from 'redux';

import createSagaMiddleware from 'redux-saga';
import rootReducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleaware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(rootReducers, applyMiddleware(sagaMiddleaware));
  sagaMiddleaware.run(rootSaga);
  return store;
};

export default configureStore;
