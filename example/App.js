import React, { Component } from "./node_modules/react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Loading from "react-native-dynamic-text-loading";
import { ShowcaseScreen } from "./src/components/ShowcaseScreen";

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <ShowcaseScreen />
        </SafeAreaView>
        <Loading />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
