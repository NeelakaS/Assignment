import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {fetchAlbumData} from '../action/actions';
import styles from './AlbumComponent.style';

type AlbumData = {
  userId: number,
  id: number,
  title: string,
};

type Props = {
  fetchAlbumInfo: (userId: string) => void,
  albumData: AlbumData,
  navigation: Objct,
  loading: boolean,
};

const AlbumComponent = (props: Props) => {
  const {fetchAlbumInfo, albumData, navigation, loading} = props;
  const userId = navigation.getParam('userId');

  // hooks
  useEffect(() => {
    fetchAlbumInfo(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const extractKey = (item: AlbumData, index: number) => `${item?.id}-${index}`;

  const renderItem = ({item}: AlbumData) => {
    return (
      <TouchableOpacity
        style={styles.listContainer}
        onPress={() => {
          navigation.navigate('Photo', {
            albumId: item.id,
          });
        }}>
        <Text style={styles.albumTitle} numberOfLines={2}>
          {item.title}
        </Text>
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
      data={albumData}
      renderItem={renderItem}
      keyExtractor={extractKey}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  fetchAlbumInfo: userId => dispatch(fetchAlbumData(userId)),
});
const mapStateToProps = state => ({
  albumData: state.albumData.data,
  loading: state.albumData.isFetching,
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(AlbumComponent);
