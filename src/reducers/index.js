import {combineReducers} from 'redux';
import userData from './userReducer';
import albumData from './albumReducer';
import photoData from './photoReducer';

const reducers = combineReducers({
  userData,
  albumData,
  photoData,
});

export default reducers;
