import {
  FETCHING_PHOTO_DATA,
  FETCHING_PHOTO_DATA_SUCCESS,
  FETCHING_PHOTO_ERROR,
} from '../action/actionCreators';

const initialState = {
  data: [],
  isDataFetched: false,
  isFetching: false,
  isError: false,
};

export default function photoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_PHOTO_DATA:
      return {...state, data: [], isFetching: true};
    case FETCHING_PHOTO_DATA_SUCCESS:
      return {...state, data: action.photoData, isFetching: false};
    case FETCHING_PHOTO_ERROR:
      return {...state, error: true, isFetching: false};
    default:
      return state;
  }
}
