import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './configureStore';
import Navigator from './navigator';

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
