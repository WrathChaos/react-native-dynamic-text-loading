import { StyleSheet } from "react-native";

export default {
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  loadingTextStyle: {
    fontSize: 24,
    marginTop: 32,
    fontWeight: "800",
    textAlign: "center",
    color: "white"
  }
};
