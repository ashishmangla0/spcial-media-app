import { Image, Text, View } from "react-native";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import style from "./style";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome6";
import { getFontFamily } from "../../assets/fonts/getFontFamily";
import { horizontalScale } from "../../assets/styles/scaling";

const UserPost = (props: any) => {
  const { profileImage, firstName, lastName, location, image, id } = props;
  return (
    <View style={style.userPostContainer}>
      <View style={style.user}>
        <View style={style.userContainer}>
        <UserProfileImage
            profileImage={props.profileImage}
            imageDimensions={horizontalScale(48)}
          />
          <View style={style.userTextContainer}>
            <Text
              style={[style.username, { fontFamily: getFontFamily("700") }]}
            >
              {props.firstName} {props.lastName}
            </Text>
            {props.location && (
              <Text
                style={[style.location, { fontFamily: getFontFamily("700") }]}
              >
                {props.location}
              </Text>
            )}
          </View>
        </View>
      </View>
      <View style={style.postImage}>
        <Image source={props.image} />
      </View>
      <View style={style.userPostStats}>
        <View style={style.userPostStatButton}>
          <FontAwesomeIcon name="heart" size={20} color={"#898DAE"} />
          <Text style={{ marginLeft: 6, color: "#79869F" }}>{props.likes}</Text>
        </View>
        <View style={style.userPostStatButtonRight}>
          <FontAwesomeIcon name="message" size={20} color={"#898DAE"} />
          <Text style={{ marginLeft: 6, color: "#79869F" }}>
            {props.comments}
          </Text>
        </View>
        <View style={style.userPostStatButtonRight}>
          <FontAwesomeIcon name="bookmark" size={20} color="#898DAE" />
          <Text style={{ marginLeft: 6, color: "#79869F" }}>
            {props.bookmarks}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UserPost;
