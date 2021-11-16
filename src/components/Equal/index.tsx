import React, { Dispatch, SetStateAction } from "react";
import { View, ColorSchemeName } from "react-native";

import { Button } from "../";
import calculator, { INITIAL_STATE } from "../../util/calculator";

import styles from "./styles";

type Props = {
  theme: ColorSchemeName;
  setState: Dispatch<SetStateAction<INITIAL_STATE>>;
};

export default function Equal(props: Props) {
  function handleInput(type: string) {
    return props.setState(
      (state: INITIAL_STATE) =>
        calculator(state, type, state.currentValue) as INITIAL_STATE
    );
  }

  return (
    <View style={[styles.container]}>
      <Button
        equal
        text="="
        theme={props.theme}
        handleInput={() => handleInput("=")}
      />
    </View>
  );
}
