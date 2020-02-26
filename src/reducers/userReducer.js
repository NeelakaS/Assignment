import {
  FETCHING_USER_DATA,
  FETCHING_USER_DATA_SUCCESS,
  FETCHING_USER_ERROR,
} from '../action/actionCreators';

const initialState = {
  data: [],
  isDataFetched: false,
  isFetching: false,
  isError: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_USER_DATA:
      return {...state, data: [], isFetching: true};
    case FETCHING_USER_DATA_SUCCESS:
      return {...state, data: action.userData, isFetching: false};
    case FETCHING_USER_ERROR:
      return {...state, error: true, isFetching: false};
    default:
      return state;
  }
}
