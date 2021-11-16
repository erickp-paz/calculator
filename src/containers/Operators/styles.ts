import { StyleSheet } from "react-native";

import colors from "../../util/colors";
import { normalize } from "../../util/styles";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  top: {
    flex: 1,
  },
  center: {
    flex: 1,
    flexDirection: "row",
  },
  bottom: {
    flex: 1,
  },
  button: {
    width: normalize(45),
    height: normalize(45),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: normalize(5),
    backgroundColor: colors.nightRider,
  },
  lightButton: {
    borderWidth: 1,
    borderColor: colors.nightRider,
    backgroundColor: colors.white,
  },
  darkButton: {
    backgroundColor: colors.nightRider,
  },
  topButton: {
    borderBottomWidth: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  centerFirstButton: {
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  centerMidButton: {
    borderRadius: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  centerLastButton: {
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  bottomButton: {
    borderTopWidth: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  text: {
    fontSize: normalize(20),
  },
  circleText: {
    width: normalize(16),
    height: normalize(16),
    color: colors.darkGrayBlue,
    borderRadius: normalize(8),
    backgroundColor: colors.darkGrayBlue,
  },
  lightCircleText: {
    color: colors.lightCircle,
    backgroundColor: colors.lightCircle,
  },
  darkCircleText: {
    color: colors.darkCircle,
    backgroundColor: colors.darkCircle,
  },
  lightText: {
    color: colors.nightRider,
  },
  darkText: {
    color: colors.fauxWhite,
  },
});

export default Styles;
