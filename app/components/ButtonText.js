import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import AppText from "./AppText";

function ButtonText({ color, onPress, text, textStyle }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={textStyle} color={color}>
        {text}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ButtonText;
