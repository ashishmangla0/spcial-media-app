import { Text } from "react-native"
import style from "./style";
import { getFontFamily } from "../../assets/fonts/getFontFamily";

const Title = (props:any) =>{
  
    return <Text style={[style.title,{fontFamily:getFontFamily('700')}]}>{props?.title}</Text>;
}

export default Title