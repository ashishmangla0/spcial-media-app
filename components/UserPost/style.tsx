import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  userContainer: { flexDirection: "row" },
  userTextContainer: {
    justifyContent: "center",
    marginLeft: 10,
  },

  user: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userPostContainer: {
    marginTop: 35,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EFF2F6",
  },
  postImage: {
    alignItems: "center",
    marginVertical: 20,
  },
});

export default style;
