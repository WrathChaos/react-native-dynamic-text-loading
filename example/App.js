import React, { Component } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
// import Loading from "react-native-dynamic-text-loading";
import { ShowcaseScreen } from "./src/components/ShowcaseScreen";
import Loading from "./lib/src/Loading";

console.disableYellowBox = true;

const newList = ["Hello...", "Hello2...", "Hello3..."];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        "Assets are loading...",
        "Data is fetching...",
        "Running an algorithm..."
      ]
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ list: newList });
    }, 7500);
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <ShowcaseScreen />
        </SafeAreaView>
        <Loading list={this.state.list} />
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
