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
    height: 220,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  albumTitle: {
    fontSize: 14,
    lineHeight: 25,
    fontWeight: '600',
  },
  thumbnailImage: {
    height: 150,
    width: 150,
  },
});
