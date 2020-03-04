import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import saga from 'redux-saga';

import UserComponent from '../src/component/UserComponent';

const USER_DATA = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
  },
];

const DEFAULT_PROPS = {
  fetchUserData: jest.fn(),
  userData: [],
  navigation: {
    getParam: jest.fn(),
  },
  loading: false,
};

const middlewares = [saga];
const mockStore = configureMockStore(middlewares);
let wrapper;
describe('User Component', () => {
  it('render UserComponent correctly', () => {
    const initialState = {
      userData: {
        data: USER_DATA,
        isDataFetched: false,
        isFetching: false,
        isError: false,
      },
    };
    const store = mockStore(initialState);

    wrapper = renderer
      .create(
        <Provider store={store}>
          <UserComponent {...DEFAULT_PROPS} />
        </Provider>,
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
