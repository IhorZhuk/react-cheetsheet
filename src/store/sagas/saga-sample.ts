import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { actionTypes } from '../ducks/duck-sample';

function* getCurrentUser() {
  try {
    const currentUser = yield axios.get("//");

    yield put({
      type: actionTypes.CURRENT_USER_SUCCESS,
      payload: {
        id: currentUser.id
      },
    });
  } catch (err) {
    console.error(err);
  }
}

function* sampleSaga() {
  yield takeLatest(actionTypes.CURRENT_USER_REQUEST, getCurrentUser);
}

export default sampleSaga;