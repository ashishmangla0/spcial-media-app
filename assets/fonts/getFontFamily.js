import { useFonts } from "expo-font";
import { Text } from "react-native";

// export const useCustomFonts = () => {
//   const [fontsLoaded] = useFonts({
//     "Roboto-Black": require("../fonts/Roboto-Black.ttf"),
//     "Roboto-Regular": require("../fonts/Roboto-Regular.ttf"),
//   });

//   const getFontFamily = (weight) => {

//     switch (weight) {
//       case "900":
//         return "Roboto-Black";
//       default:
//         return "Roboto-Regular"; // default font family
//     }
//   };

//   return { fontsLoaded, getFontFamily };
// };

export const getFontFamily = (weight) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Thin": require("../fonts/Roboto-Thin.ttf"),
    "Roboto-Thin-Italic": require("../fonts/Roboto-ThinItalic.ttf"),
    "Roboto-Light": require("../fonts/Roboto-Light.ttf"),
    "Roboto-Light-Italic": require("../fonts/Roboto-LightItalic.ttf"),
    "Roboto-Regular": require("../fonts/Roboto-Regular.ttf"),
    "Roboto-Regular-Italic": require("../fonts/Roboto-Italic.ttf"),
    "Roboto-Medium": require("../fonts/Roboto-Medium.ttf"),
    "Roboto-Medium-Italic": require("../fonts/Roboto-MediumItalic.ttf"),
    "Roboto-Bold": require("../fonts/Roboto-Bold.ttf"),
    "Roboto-Bold-Italic": require("../fonts/Roboto-BoldItalic.ttf"),
    "Roboto-Black": require("../fonts/Roboto-Black.ttf"),
    "Roboto-Black-Italic": require("../fonts/Roboto-BlackItalic.ttf")
  });
  if (!fontsLoaded) {
    return "";
  };

  switch (weight) {
    case "100":
      return "Roboto-Thin";
    case "100i":
      return "Roboto-Thin-Italic";
    case "300":
      return "Roboto-Light";
    case "300i":
      return "Roboto-Light-Italic";
    case "400":
      return "Roboto-Regular";
    case "400i":
      return "Roboto-Regular-Italic";
    case "500":
      return "Roboto-Medium";
    case "700":
      return "Roboto-Bold";
    case "700i":
      return "Roboto-Bold-Italic";
    case "900":
      return "Roboto-Black";
    case "900i":
      return "Roboto-Black-Italic";
    default:
      return "Roboto-Regular"; // default font family
  }
};
