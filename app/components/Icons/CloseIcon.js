import React from "react";
import { View, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

import Icon from "./Icon";

export default function CloseIcon({
  containerColor,
  containerStyle,
  iconColor,
  removeItemFromCartHandler,
}) {
  return (
    <View
      style={[
        styles.iconContainer,
        containerStyle,
        { backgroundColor: containerColor },
      ]}
    >
      <Icon
        color={iconColor}
        IconComponent={EvilIcons}
        name="close"
        size={18}
        onPress={removeItemFromCartHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    borderRadius: 7,
    height: 20,
    justifyContent: "center",
    width: 20,
  },
});
