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
    height: 100,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: '15%',
    marginHorizontal: 10,
  },
  userName: {
    fontSize: 17,
    lineHeight: 25,
    fontWeight: 'bold',
  },
});
