import React, { Component } from "react";
import PropTypes from "prop-types";
import { Animated, View } from "react-native";
import Spinner from "react-native-spinkit";
import styles, { container, _textStyle } from "./Loading.style";

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

  componentDidUpdate(prevProps) {
    if (prevProps.list !== this.props.list) {
      clearInterval(this.intervalID);
      this.setState({ currentText: prevProps.list }, () => {
        this.changeTextByTime();
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  animationAlgorithm(item) {
    this.fadeIn();
    this.setState({ currentText: item });
    setTimeout(() => {
      this.fadeOut();
    }, 1350);
  }

  changeTextByTime() {
    const { list } = this.props;
    let counter = 0;
    // Initial Value
    this.animationAlgorithm(list[0]);
    intervalID = setInterval(() => {
      counter = (counter + 1) % list.length;
      this.animationAlgorithm(list[counter]);
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
      textColor,
      textStyle,
      spinnerStyle,
      numberOfLines,
      backgroundColor,
      spinnerIsVisible
    } = this.props;

    return (
      <View style={container(backgroundColor)}>
        <View style={styles.containerGlue}>
          <Spinner
            type={type}
            size={size}
            color={color}
            isVisible={spinnerIsVisible}
            style={[styles.spinnerStyle, spinnerStyle]}
          />
          <Animated.Text
            numberOfLines={numberOfLines}
            style={[ { opacity: this.state.animation }, _textStyle(textColor), textStyle ]} >
            {this.state.currentText}
          </Animated.Text>
        </View>
      </View>
    );
  }
}

Loading.propTypes = {
  list: PropTypes.array,
  type: PropTypes.string,
  size: PropTypes.number,
  text: PropTypes.string,
  textColor: PropTypes.string,
  numberOfLines: PropTypes.number,
  spinnerIsVisible: PropTypes.bool,
  backgroundColor: PropTypes.string
};

Loading.defaultProps = {
  list: [
    "Assets are loading...",
    "Data is fetching...",
    "Running an algorithm..."
  ],
  size: 50,
  color: "white",
  numberOfLines: 2,
  textColor: "white",
  text: "Yükleniyor...",
  spinnerIsVisible: true,
  type: "FadingCircleAlt",
  backgroundColor: "rgba(0, 0, 0, 0.5)"
};
