import { SafeAreaView, StatusBar, Text, TouchableOpacity } from "react-native";
import globalStyle from "../../assets/styles/globalStyle";

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <StatusBar />
      <TouchableOpacity
      onPress={() => navigation?.goBack()}
      >
        <Text>Go back</Text>
      </TouchableOpacity>
      
      <Text>I am profile</Text>
    </SafeAreaView>
  );
};

export default Profile;
