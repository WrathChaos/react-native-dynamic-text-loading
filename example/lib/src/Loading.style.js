import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export default {
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  loadingTextStyle: {
    width: width * 0.8,
    fontSize: 24,
    marginTop: 32,
    fontWeight: "800",
    textAlign: "center",
    color: "white"
  }
};
