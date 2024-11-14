import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "../AppText";
import colors from "../../config/colors";
import RowContainer from "../RowContainer";
import CloseIcon from "../Icons/CloseIcon";

export default function CartItem({
  food,
  price,
  removeItemFromCartHandler,
  restaurant,
  quantity,
}) {
  return (
    <RowContainer style={styles.cartItemContainer}>
      <RowContainer>
        <AppText style={styles.text} color={colors.altTextColor}>
          {quantity} x
        </AppText>
        <View style={styles.textContainer}>
          <AppText style={styles.text} color={colors.altTextColor}>
            {food}
          </AppText>
          <AppText style={styles.restaurant} color={colors.primary}>
            {restaurant}
          </AppText>
        </View>
      </RowContainer>
      <RowContainer>
        <AppText style={styles.text} color={colors.altTextColor}>
          N {price}
        </AppText>
        <CloseIcon
          containerColor="#fff"
          containerStyle={styles.iconContainer}
          iconColor={colors.altTextColor}
          removeItemFromCartHandler={removeItemFromCartHandler}
        />
      </RowContainer>
    </RowContainer>
  );
}

const styles = StyleSheet.create({
  cartItemContainer: {
    backgroundColor: colors.altBackgroundColor,
    borderRadius: 10,
    marginVertical: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  iconContainer: {
    marginLeft: 20,
    top: 3,
  },
  restaurant: {
    fontSize: 14,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
  textContainer: {
    marginLeft: 16,
  },
});
