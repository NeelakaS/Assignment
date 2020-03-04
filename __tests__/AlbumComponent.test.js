import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import saga from 'redux-saga';

import AlbumComponent from '../src/component/AlbumComponent';

const ALBUM_DATA = [
  {
    userId: 9,
    id: 82,
    title: 'recusandae consequatur vel amet unde',
  },
  {
    userId: 9,
    id: 83,
    title: 'aperiam odio fugiat',
  },
  {
    userId: 9,
    id: 84,
    title: 'est et at eos expedita',
  },
];

const DEFAULT_PROPS = {
  fetchUserData: jest.fn(),
  albumData: [],
  navigation: {
    getParam: jest.fn(),
  },
  loading: false,
};

const middlewares = [saga];
const mockStore = configureMockStore(middlewares);
let wrapper;

describe('User Compoent', () => {
  it('render UserComponent correctly', () => {
    const initialState = {
      albumData: {
        data: ALBUM_DATA,
        isDataFetched: false,
        isFetching: false,
        isError: false,
      },
    };
    const store = mockStore(initialState);

    wrapper = renderer
      .create(
        <Provider store={store}>
          <AlbumComponent {...DEFAULT_PROPS} />
        </Provider>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
