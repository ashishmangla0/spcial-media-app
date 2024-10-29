import { SafeAreaView, StatusBar, Text } from "react-native";
import globalStyle from "../../assets/styles/globalStyle";

const Profile = () => {
  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <StatusBar />
      <Text>I am profile</Text>
    </SafeAreaView>
  );
};

export default Profile;
