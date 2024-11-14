import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

import colors from "../../config/colors";
import Icon from "./Icon";

function Add({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon
          color={colors.white}
          IconComponent={FontAwesome6}
          name="add"
          onPress={onPress}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    width: 50,
  },
});

export default Add;
