import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  modalContentContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  crossIcon: {
    paddingRight: 10,
    paddingTop: 25,
    position: 'absolute',
    right: 0,
  },
  image: {
    height: 600,
    width: 600,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    padding: 150,
  },
});
