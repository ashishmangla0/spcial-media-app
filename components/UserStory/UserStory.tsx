import { Text, View } from "react-native";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import style from "./style";
import { getFontFamily } from "../../assets/fonts/getFontFamily";
import { horizontalScale } from "../../assets/styles/scaling";

const UserStory = (props: any) => {
  const { isEnd, profileImage, firstName } = props;
  return (
    <View style={[style.storyContainer, isEnd && style.isEnd]}>
      <UserProfileImage
        profileImage={profileImage}
        imageDimensions={horizontalScale(50)}
      />
      <Text style={[style.firstName, { fontFamily: getFontFamily("500") }]}>
        {firstName}
      </Text>
    </View>
  );
};

export default UserStory;
