import React from "react";
import { View, StyleSheet, Text } from "react-native";

import AppButton from "../AppButton";
import colors from "../../config/colors";
import RowContainer from "../RowContainer";
import QuantityChange from "../QuantityChange";

export default function Footer({
  buttonText = "Order",
  deactivateQuantityChange,
  decreaseQuantity,
  increaseQuantity,
  onPress,
  removeButton = false,
  quantity,
}) {
  return (
    <RowContainer style={styles.footerContiner}>
      <QuantityChange
        deactivateQuantityChange={deactivateQuantityChange}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        containerStyle={styles.quantityContainer}
        quantity={quantity}
        size={13}
      />
      {!removeButton && (
        <AppButton shape="box" style={styles.button} onPress={onPress}>
          {buttonText}
        </AppButton>
      )}
    </RowContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    shadowColor: colors.primary,
  },
  footerContiner: {
    alignItems: "center",
  },
  quantityContainer: {
    flexDirection: "row",
    top: 6,
    right: 3,
  },
});
