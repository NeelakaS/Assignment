import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import saga from 'redux-saga';

import PhotoComponent from '../src/component/PhotoComponent';

const PHOTO_DATA = [
  {
    albumId: 5,
    id: 215,
    title: 'in magnam praesentium ab illum',
    url: 'XYZ.Com/src',
    thumbnailUrl: 'www.yze.com',
  },
  {
    albumId: 5,
    id: 216,
    title: 'itaque nihil voluptatum',
    url: 'XYZ.Com/src',
    thumbnailUrl: 'www.yze.com',
  },
  {
    albumId: 5,
    id: 217,
    title: 'ab ut placeat fuga',
    url: 'XYZ.Com/src',
    thumbnailUrl: 'www.yze.com',
  },
];

const DEFAULT_PROPS = {
  fetchUserData: jest.fn(),
  photoData: [],
  navigation: {
    getParam: jest.fn(),
  },
  loading: false,
};

const middlewares = [saga];
const mockStore = configureMockStore(middlewares);
let wrapper;

describe('Photo Component', () => {
  it('render UserComponent correctly', () => {
    const initialState = {
      photoData: {
        data: PHOTO_DATA,
        isDataFetched: false,
        isFetching: false,
        isError: false,
      },
    };
    const store = mockStore(initialState);

    wrapper = renderer
      .create(
        <Provider store={store}>
          <PhotoComponent {...DEFAULT_PROPS} />
        </Provider>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
