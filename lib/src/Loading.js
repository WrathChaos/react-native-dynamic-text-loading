import React, { Component } from "react";
import PropTypes from "prop-types";
import { Animated, View } from "react-native";
import styles from "./Loading.style";
import Spinner from "react-native-spinkit";

export default class Loading extends Component {
  intervalID = 0;

  constructor(props) {
    super(props);
    this.state = {
      currentText: "",
      animation: new Animated.Value(0)
    };
  }

  componentDidMount() {
    this.changeTextByTime();
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  changeTextByTime() {
    const { textList } = this.props;
    let counter = 0;
    intervalID = setInterval(() => {
      counter = (counter + 1) % textList.length;
      this.fadeIn();
      this.setState({ currentText: textList[counter] });
      setTimeout(() => {
        this.fadeOut();
      }, 1250);
    }, 1850);
  }

  fadeIn() {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 350
    }).start();
  }

  fadeOut() {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 350
    }).start();
  }

  render() {
    const {
      type,
      size,
      color,
      text,
      isVisible,
      textColor,
      textStyle,
      spinnerStyle,
      backgroundColor
    } = this.props;

    return (
      <View style={styles.container}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Spinner
            type={type}
            style={{ alignSelf: "center" }}
            size={this.props.size}
            color={this.props.color}
            isVisible={this.props.isVisible}
          />
          <Animated.Text
            style={[styles.loadingTextStyle, { opacity: this.state.animation }]}
          >
            {this.state.currentText}
          </Animated.Text>
        </View>
      </View>
    );
  }
}

Loading.propTypes = {
  textList: PropTypes.array,
  type: PropTypes.string,
  size: PropTypes.number,
  text: PropTypes.string
};

Loading.defaultProps = {
  textList: ["Assets are loading", "Markers are implementing"],
  type: "FadingCircleAlt",
  size: 50,
  color: "white",
  text: "Yükleniyor..."
};
