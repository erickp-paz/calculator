import React from "react";
import { TouchableOpacity, Text, ColorSchemeName } from "react-native";
import {
  ORIENTATION,
  useDeviceOrientation,
} from "../../hooks/useDeviceOrientation";

import { handleButtons, numberButtons } from "../../util/buttons";

import styles from "./styles";

type Props = {
  theme: ColorSchemeName;
  text: string | number;
  handleInput: () => void;
  equal?: boolean;
};

export default function Button(props: Props) {
  const orientation = useDeviceOrientation();

  function isLandscape() {
    return orientation === ORIENTATION.LANDSCAPE;
  }

  function isLight() {
    return props.theme === "light";
  }

  function isEqual() {
    return props.equal;
  }

  function isZero() {
    return props.text === 0;
  }

  function isDecimal() {
    return props.text === ",";
  }

  function isNumber() {
    return numberButtons.includes(props.text as number) || isDecimal();
  }

  function isHandle() {
    return handleButtons.includes(props.text as string);
  }

  function getButtonZero() {
    return isZero() ? styles.zeroButton : {};
  }

  function getTextZero() {
    return isZero() ? styles.zeroText : {};
  }

  function getBorderColor() {
    switch (true) {
      case isLight():
        return styles.lightButton;
      default:
        return styles.darkButton;
    }
  }

  function getBackgroundColor() {
    switch (true) {
      case isNumber() && isLight():
        return styles.lightButtonNumber;
      case isNumber() && !isLight():
        return styles.darkButtonNumber;
      case isHandle():
        return styles.buttonHandle;
      case props.text === "=":
        return styles.buttonEqual;
      default:
        return styles.buttonOperator;
    }
  }

  function getTextColor() {
    switch (true) {
      case isNumber() && isLight():
        return styles.lightTextNumber;
      case isNumber() && !isLight():
        return styles.darkTextNumber;
      case isHandle() && isLight():
        return styles.lightTextHandle;
      case isHandle() && !isLight():
        return styles.darkTextHandle;
      case props.text === "=":
        return styles.textEqual;
      default:
        return styles.darkTextNumber;
    }
  }

  function getOrientationButton() {
    return isLandscape() ? styles.landscapeButton : {};
  }

  function getOrientationText() {
    return isLandscape() ? styles.landscapeTextNumber : {};
  }

  function getOrientationButtonZero() {
    return isLandscape() && isZero() ? styles.landscapeZeroButton : {};
  }

  function getOrientationTextZero() {
    return isLandscape() && isZero() ? styles.landscapeZeroText : {};
  }

  function getButtonEqual() {
    return isEqual() ? styles.equalButton : {};
  }

  function getTextEqual() {
    return isEqual() ? styles.equalText : {};
  }

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getOrientationButton(),
        getButtonZero(),
        getOrientationButtonZero(),
        getBorderColor(),
        getBackgroundColor(),
        getButtonEqual(),
      ]}
      onPress={() => props.handleInput()}
    >
      <Text
        style={[
          styles.textNumber,
          getOrientationText(),
          getTextZero(),
          getOrientationTextZero(),
          getTextColor(),
          getTextEqual(),
        ]}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}
