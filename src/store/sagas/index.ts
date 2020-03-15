import { all } from 'redux-saga/effects';
import sampleSaga from './saga-sample';

export default function* rootSaga() {
  yield all([
    sampleSaga(),
  ]);
}