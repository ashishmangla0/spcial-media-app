import { Text, View } from "react-native"
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import style from "./style";


const UserStory = (props:any) =>{
    const{isEnd,profileImage,firstName} = props
return(
    <View style={[style.storyContainer, isEnd && style.isEnd]}>
        
        <UserProfileImage
        profileImage={profileImage}
        // imageDimensions={horizontalScale(65)}
      />
       <Text style={style.firstName}>{firstName}</Text>
    </View>
)
}

export default UserStory