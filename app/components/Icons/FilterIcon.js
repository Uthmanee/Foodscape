import React from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Icon from "./Icon";

export default function FilterIcon({ style }) {
  return <Icon style={style} IconComponent={Ionicons} name="filter-sharp" />;
}

const styles = StyleSheet.create({
  icon: {},
});
