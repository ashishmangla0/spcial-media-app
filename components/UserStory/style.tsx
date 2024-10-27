import {StyleSheet} from 'react-native';
// import {getFontFamily} from '../../assets/fonts/helper';
// import {
//   horizontalScale,
//   scaleFontSize,
//   verticalScale,
// } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  storyContainer: {
    // marginRight: horizontalScale(20),
    marginRight: 30,
    
  },
  firstName: {
    // fontFamily: getFontFamily('Inter', '500'),
    // fontSize: scaleFontSize(14),
    // color: '#022150',
    // marginTop: verticalScale(8),
    // textAlign: 'center',

    fontSize: 14,
    color: '#022150',
    marginTop: 8,
    textAlign: 'center',
  },
  isEnd:{
    backgroundColor:'red'
  }
});

export default style;