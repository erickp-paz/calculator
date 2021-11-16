import { StyleSheet } from "react-native";
import { normalize } from "../../util/styles";

import colors from "../../util/colors";

const Styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: normalize(70),
    minHeight: normalize(70),
    borderRadius: normalize(35),
    marginBottom: 10,
  },
  equalButton: {
    alignItems: "center",
    justifyContent: "center",
    width: normalize(50),
    height: normalize(50),
    borderRadius: normalize(10),
    backgroundColor: colors.orange,
  },
  landscapeButton: {
    minWidth: normalize(40),
    minHeight: normalize(40),
    borderRadius: normalize(20),
    marginBottom: 5,
  },
  lightButton: {
    borderColor: colors.gray,
    borderWidth: 1,
  },
  darkButton: {
    borderColor: colors.black,
    borderWidth: 1,
  },
  lightButtonNumber: {
    backgroundColor: colors.fauxWhite,
  },
  darkButtonNumber: {
    backgroundColor: colors.nightRider,
  },
  buttonOperator: {
    backgroundColor: colors.orange,
  },
  buttonEqual: {
    backgroundColor: colors.fauxWhite,
  },
  buttonHandle: {
    backgroundColor: colors.gray,
  },
  textNumber: {
    fontSize: normalize(30),
  },
  landscapeTextNumber: {
    fontSize: normalize(15),
  },
  lightTextNumber: {
    color: colors.nightRider,
  },
  darkTextNumber: {
    color: colors.fauxWhite,
  },
  textOperator: {
    color: colors.fauxWhite,
  },
  lightTextHandle: {
    color: colors.fauxWhite,
  },
  darkTextHandle: {
    color: colors.black,
  },
  textEqual: {
    color: colors.orange,
  },
  zeroButton: {
    width: normalize(150),
    alignItems: "flex-start",
  },
  zeroText: {
    marginLeft: normalize(25),
  },
  landscapeZeroButton: {
    width: normalize(20),
    alignItems: "center",
  },
  landscapeZeroText: {
    marginLeft: normalize(0),
  },
  equalText: {
    fontSize: normalize(30),
    color: colors.white,
  },
});

export default Styles;
