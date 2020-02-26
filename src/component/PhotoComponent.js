import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import DisplayImageModal from './modal/displayImageModal';
import {fetchPhotoData} from '../action/actions';
import styles from './PhotoComponent.style';

type PhotData = {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string,
};

type Props = {
  fetchPhotoInfo: (albumId: stirng) => void,
  photoData: PhotData,
  navigation: Objct,
  loading: boolean,
};

const PhotoComponent = (props: Props) => {
  const {fetchPhotoInfo, photoData, navigation, loading} = props;

  //hooks
  const [displyModal, setDisplayModal] = useState(false);
  const [url, setUrl] = useState('');
  const albumId = navigation.getParam('albumId');

  //hooks
  useEffect(() => {
    fetchPhotoInfo(albumId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [albumId]);

  const showModal = (item: PhotData) => {
    setUrl(item.url);
    setDisplayModal(true);
  };
  const closeModal = () => {
    setDisplayModal(false);
  };

  const extractKey = (item: PhotData, index: number) => `${item?.id}-${index}`;

  const renderItem = ({item}: PhotData) => {
    return (
      <TouchableOpacity
        style={styles.listContainer}
        onPress={() => {
          showModal(item);
        }}>
        <Text style={styles.albumTitle}>{item.title}</Text>
        <Image
          source={{uri: item.thumbnailUrl}}
          style={styles.thumbnailImage}
        />
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
    <View>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.listItemSeparator} />}
        data={photoData}
        renderItem={renderItem}
        keyExtractor={extractKey}
      />
      {/* Display Full size Image Modal */}
      {!!displyModal && (
        <DisplayImageModal
          visible={displyModal}
          closeModal={closeModal}
          imageUrl={url}
        />
      )}
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchPhotoInfo: albumId => dispatch(fetchPhotoData(albumId)),
});
const mapStateToProps = state => ({
  photoData: state.photoData.data,
  loading: state.photoData.isFetching,
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(PhotoComponent);
