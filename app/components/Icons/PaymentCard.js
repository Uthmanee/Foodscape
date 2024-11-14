import React from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../../config/colors";
import Icon from "./Icon";

function PaymentCard({ onPress, style }) {
  return (
    <Icon
      style={style}
      color={colors.primary}
      IconComponent={Ionicons}
      name="card-outline"
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default PaymentCard;
