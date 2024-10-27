import {StyleSheet} from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';
const style = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(20),    
  },
  firstName: {
    // fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(14),
    color: '#022150',
    marginTop: verticalScale(8),
    textAlign: 'center',
  },
  isEnd:{
    backgroundColor:'red'
  }
});

export default style;