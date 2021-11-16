import React, { Dispatch, SetStateAction } from "react";
import { View, ColorSchemeName, TouchableOpacity, Text } from "react-native";

import { Button } from "../../components";
import calculator, { INITIAL_STATE } from "../../util/calculator";

import styles from "./styles";

type Props = {
  theme: ColorSchemeName;
  setState: Dispatch<SetStateAction<INITIAL_STATE>>;
};

export default function Operators(props: Props) {
  const operators = ["-", "+", "÷", "x"];

  function isLight() {
    return props.theme === "light";
  }

  function getButtonTheme() {
    return isLight() ? styles.lightButton : styles.darkButton;
  }

  function getTextTheme() {
    return isLight() ? styles.lightText : styles.darkText;
  }

  function getCircleTheme() {
    return isLight() ? styles.lightCircleText : styles.darkCircleText;
  }

  function handleInput(type: string, value: string) {
    return props.setState(
      (state: INITIAL_STATE) => calculator(state, type, value) as INITIAL_STATE
    );
  }

  return (
    <View style={[styles.container]}>
      <View style={[styles.top]}>
        <TouchableOpacity
          style={[styles.button, styles.topButton, getButtonTheme()]}
          onPress={() => handleInput("operator", "-")}
        >
          <Text style={[styles.text, getTextTheme()]}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.center]}>
        <TouchableOpacity
          style={[styles.button, styles.centerFirstButton, getButtonTheme()]}
          onPress={() => handleInput("operator", "+")}
        >
          <Text style={[styles.text, getTextTheme()]}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.centerMidButton, getButtonTheme()]}
        >
          <Text style={[styles.text, styles.circleText, getCircleTheme()]}>
            a
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.centerLastButton, getButtonTheme()]}
          onPress={() => handleInput("operator", "÷")}
        >
          <Text style={[styles.text, getTextTheme()]}>÷</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.bottom]}>
        <TouchableOpacity
          style={[styles.button, styles.bottomButton, getButtonTheme()]}
          onPress={() => handleInput("operator", "x")}
        >
          <Text style={[styles.text, getTextTheme()]}>x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
