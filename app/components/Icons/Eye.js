import React from "react";
import { StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import colors from "../../config/colors";
import Icon from "./Icon";

function Eye(props) {
  return <Icon IconComponent={Feather} name="eye" color={colors.ash} />;
}

const styles = StyleSheet.create({
  container: {},
});

export default Eye;
