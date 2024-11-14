import React from "react";
import { StyleSheet } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import RowContainer from "./RowContainer";
import QuantityChangeIcon from "./QuantityChangeIcon";

export default function QuantityChange({
  containerStyle,
  deactivateQuantityChange,
  decreaseQuantity,
  increaseQuantity,
  quantity,
  size,
}) {
  return (
    <RowContainer style={containerStyle}>
      {deactivateQuantityChange && <AppText>quantity: </AppText>}
      {!deactivateQuantityChange && (
        <QuantityChangeIcon
          change="decrease"
          size={size}
          onPress={decreaseQuantity}
        />
      )}
      <AppText style={styles.quantity}>{quantity}</AppText>
      {!deactivateQuantityChange && (
        <QuantityChangeIcon
          change="increase"
          size={size}
          onPress={increaseQuantity}
        />
      )}
    </RowContainer>
  );
}

const styles = StyleSheet.create({
  quantity: {
    color: colors.tertiary,
    fontSize: 16,
    marginHorizontal: 7,
  },
});
