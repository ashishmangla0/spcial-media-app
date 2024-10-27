import {StyleSheet} from 'react-native';
import { scaleFontSize, verticalScale } from '../../assets/styles/scaling';



const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontSize: scaleFontSize(24),
    marginBottom: verticalScale(24)
  },
});

export default style;