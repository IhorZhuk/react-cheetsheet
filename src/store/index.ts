import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './ducks';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const w: any = window;

const composeEnhancers =
  process.env.REACT_APP_IS_DEVELOP === 'true'
    ? w.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const appStore = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default appStore;