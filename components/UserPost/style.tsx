import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
  userContainer: { flexDirection: "row" },
  userTextContainer: {
    justifyContent: "center",
    marginLeft: horizontalScale(10)
  },

  user: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: scaleFontSize(16),
  },
  username: {
    color: '#000',
    fontSize: scaleFontSize(16),
  },
  location: {
    color: '#79869F',
    fontSize: scaleFontSize(12),
    marginTop: verticalScale(5),
  },
  postImage: {
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  userPostContainer: {
    marginTop: 35,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EFF2F6",
  },
  userPostStats: {marginLeft: horizontalScale(10), flexDirection: 'row'},
  userPostStatButton: {flexDirection: 'row'},
  userPostStatButtonRight: {
    flexDirection: 'row',
    marginLeft: horizontalScale(27),
  },
  userPostStatText: {marginLeft: horizontalScale(3), color: '#79869F'},
});

export default style;
