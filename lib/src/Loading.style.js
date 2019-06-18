import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export function container(backgroundColor) {
  return {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: backgroundColor
  };
}

export function _textStyle(textColor) {
  return {
    fontSize: 24,
    marginTop: 36,
    color: textColor,
    fontWeight: "800",
    width: width * 0.8,
    textAlign: "center",
    alignSelf: "baseline"
  };
}

export default {
  spinnerStyle: { alignSelf: "center" },
  containerGlue: { alignItems: "center", justifyContent: "center" }
};
