import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import UserComponent from './component/UserComponent';
import AlbumComponent from './component/AlbumComponent';
import PhotoComponent from './component/PhotoComponent';

const navigator = createStackNavigator(
  {
    User: UserComponent,
    Album: AlbumComponent,
    Photo: PhotoComponent,
  },
  {
    initialRouteName: 'User',
    defaultNavigationOptions: {},
  },
);

export default createAppContainer(navigator);
