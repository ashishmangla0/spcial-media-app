import {Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

// Guideline sizes are based on a standard iPhone (e.g., iPhone X)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const horizontalScale = (size) => Math.round((width/guidelineBaseWidth) * size)

export const verticalScale = (size) =>  Math.round((height / guidelineBaseHeight) * size)


export const scaleFontSize = (size) => {
   const value =  Math.round((width / guidelineBaseWidth) * size)

console.log(value);
return value

}


