import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {fetchUserData} from '../action/actions';
import styles from './UserComponent.style';

type UserData = {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
};

type Props = {
  fetchUserInfo: () => void,
  userData: UserData,
  navigation: Objct,
  loading: boolean,
};

const UserComponent = (props: Props) => {
  const {fetchUserInfo, userData, navigation, loading} = props;

  // hooks
  useEffect(() => {
    // getting user details
    fetchUserInfo;
  });

  const extractKey = (item: UserData, index: number) => `${item?.id}-${index}`;

  const renderItem = ({item}: UserData) => {
    return (
      <TouchableOpacity
        style={styles.listContainer}
        onPress={() => {
          navigation.navigate('Album', {
            userId: item.id,
          });
        }}>
        <View style={styles.userImage}>
          <Image source={require('./img/user_thumbnail.png')} />
        </View>
        <View>
          <Text style={styles.userName}>{item.name}</Text>
          <Text>Email: {item.email}</Text>
          <Text>Phone: {item.phone}</Text>
          <Text>Website: {item.website}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // loading untill API receives data
  if (loading) {
    return (
      <View style={styles.actionIndicator}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.listItemSeparator} />}
      data={userData}
      renderItem={renderItem}
      keyExtractor={extractKey}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  fetchUserInfo: dispatch(fetchUserData()),
});
const mapStateToProps = state => ({
  userData: state.userData.data,
  loading: state.userData.isFetching,
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
