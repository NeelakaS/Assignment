import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  listItemSeparator: {
    minHeight: StyleSheet.hairlineWidth,
    opacity: 0.3,
    backgroundColor: '#404041',
  },
  actionIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    height: 60,
    backgroundColor: '#ffffff',
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },
  albumTitle: {
    fontSize: 15,
    lineHeight: 25,
    fontWeight: 'bold',
  },
});
