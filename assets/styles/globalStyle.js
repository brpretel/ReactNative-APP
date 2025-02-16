import {StyleSheet} from 'react-native';
import {getFontFamily} from '../fonts/helper';

const globalStyle = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: 14,
    borderRadius: 100,
    backgroundColor: '#F9FAFB',
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 12,
    height: 12,
    borderRadius: 10,
    position: 'absolute',
    right: 9,
    top: 11,
  },
  messageNumber: {
    color: '#FFFFFF',
    fontSize: 7,
    fontFamily: getFontFamily('Inter', '600'),
  },
  userStoryContainer: {
    marginTop: 20,
    marginHorizontal: 28,
  },
});

export default globalStyle;
