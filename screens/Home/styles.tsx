import { StyleSheet } from "react-native";
import { horizontalScale } from "../../assets/styles/scaling";

const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
    footer: {
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    messageIcon: {
      padding: horizontalScale(14),
      borderRadius: horizontalScale(100),
      backgroundColor: '#F9FAFB',
    },
  });


  export default styles;