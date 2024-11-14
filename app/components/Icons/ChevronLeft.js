import React from "react";
import { StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Icon from "./Icon";

export default function ChevronLeft({ color, size, style }) {
  const navigation = useNavigation();
  return (
    <Icon
      style={style}
      color={color}
      IconComponent={Entypo}
      onPress={() => navigation.goBack()}
      name="chevron-left"
      size={size}
    />
  );
}

const styles = StyleSheet.create({
  icon: {},
});
