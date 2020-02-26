import {
  FETCHING_ALBUM_DATA,
  FETCHING_ALBUM_DATA_SUCCESS,
  FETCHING_ALBUM_ERROR,
} from '../action/actionCreators';

const initialState = {
  data: [],
  isDataFetched: false,
  isFetching: false,
  isError: false,
};

export default function albumReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_ALBUM_DATA:
      return {...state, data: [], isFetching: true};
    case FETCHING_ALBUM_DATA_SUCCESS:
      return {...state, data: action.albumData, isFetching: false};
    case FETCHING_ALBUM_ERROR:
      return {...state, error: true, isFetching: false};
    default:
      return state;
  }
}
