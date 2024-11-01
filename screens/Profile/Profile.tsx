import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import styles from "./styles";
import { getFontFamily } from "../../assets/fonts/getFontFamily";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <StatusBar />
      <TouchableOpacity onPress={() => navigation?.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>

      <Text>Welcome to profile page</Text>
      <ScrollView contentContainerStyle={globalStyle.flexGrow}>
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImageContent}>
            <Image
              style={styles.profileImage}
              source={require('../../assets/images/default_profile.png')}
            />
          </View>
        </View>
        <Text style={[styles.userName,{fontFamily:getFontFamily('600')}]}>Emmanuel Robertsen</Text>
        <View style={[styles.statContainer]}>
          <View>
            <Text style={styles.statAmount}>45</Text>
            <Text style={[styles.statType,{fontFamily:getFontFamily('400')}]}>Following</Text>
          </View>
          <View style={styles.statBorder} />
          <View>
            <Text style={[styles.statAmount,{fontFamily:getFontFamily('600')}]}>30M</Text>
            <Text style={styles.statType}>Followers</Text>
          </View>
          <View style={styles.statBorder} />
          <View>
            <Text style={styles.statAmount}>100</Text>
            <Text style={styles.statType}>Posts</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
