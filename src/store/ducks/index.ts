import { combineReducers } from 'redux';
import SampleReducer from './duck-sample';

export default combineReducers({
  sample: SampleReducer
})
