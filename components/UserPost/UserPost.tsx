import { Image, Text, View } from "react-native";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import style from "./style";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome6";

const UserPost = (props: any) => {
  const { profileImage, firstName, lastName, location, image, id } = props;
  return (
    <View style={style.userPostContainer}>
      <View style={style.user}>
        <View style={style.userContainer}>
          <UserProfileImage profileImage={profileImage} imageDimensions={48} />
          <View style={style.userTextContainer}>
            <Text>
              {firstName} {lastName}
            </Text>
            {location && <Text> {location}</Text>}
          </View>
        </View>
      </View>
      <View style={style.postImage}>
        <Image source={props.image} />
      </View>
      <View style={{ marginLeft: 10, flexDirection: "row" }}>
        <View style={{ flexDirection: "row" }}>
          <FontAwesomeIcon name="heart" size={20} color={"#898DAE"} />
          {/* <Icon name="heart" color={"#79869F"} /> */}
          <Text style={{ marginLeft: 6, color: "#79869F" }}>{props.likes}</Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 27 }}>
          <FontAwesomeIcon name="message" size={20} color={"#898DAE"} />
          <Text style={{ marginLeft: 6, color: "#79869F" }}>
            {props.comments}
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 27 }}>
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
