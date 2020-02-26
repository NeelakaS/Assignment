import React from 'react';
import {View, Modal, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import styles from './imageModal.style';

type Props = {
  visible: boolean,
  closeModal: () => void,
  imageUrl: string,
};

const DisplayImageModal = (props: Props) => {
  return (
    <Modal
      visible={props.visible}
      animationType="slide"
      transparent
      onRequestClose={props.closeModal}>
      <SafeAreaView style={styles.modalContainer}>
        <View style={styles.modalContentContainer}>
          <TouchableOpacity onPress={props.closeModal} style={styles.crossIcon}>
            <Image source={require('../img/close_icon.png')} />
          </TouchableOpacity>
          <Image source={{uri: props.imageUrl}} style={styles.image} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default DisplayImageModal;
