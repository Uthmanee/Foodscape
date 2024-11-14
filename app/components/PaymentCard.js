import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import hiddenCardDetailsPlaceholder from "../dataStructure/hiddenCardDetailsPlaceholder";
import RowContainer from "./RowContainer";

function PaymentCard({
  card,
  style,
  logo = require("../assets/pay/masterCardLogo.png"),
}) {
  return (
    <ImageBackground
      source={require("../assets/pay/card.png")}
      style={[styles.container, style]}
    >
      <RowContainer>
        <AppText color={colors.white}>Untitled.</AppText>
        <Image
          style={styles.image}
          source={require("../assets/pay/PayPassIcon.png")}
        />
      </RowContainer>
      <RowContainer style={styles.cardFooter}>
        <View style={{ width: "68%" }}>
          <RowContainer>
            <AppText color={colors.white}>
              {card.name ? card.name : hiddenCardDetailsPlaceholder.cardName}
            </AppText>
            <AppText color={colors.white}>
              {card.expiryDate
                ? card.expiryDate
                : hiddenCardDetailsPlaceholder.expiryDate}
            </AppText>
          </RowContainer>
          <AppText style={styles.cardNumber} color={colors.white}>
            {card.number
              ? card.number
              : hiddenCardDetailsPlaceholder.cardNumber}
          </AppText>
        </View>
        <Image style={styles.logo} source={logo} />
      </RowContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  cardFooter: {},
  cardNumber: {
    fontSize: 20,
  },
  container: {
    borderRadius: 20,
    height: 200,
    justifyContent: "space-between",
    overflow: "hidden",
    padding: 20,
    resizeMode: "repeat",
  },
  image: {
    height: 25,
    resizeMode: "contain",
    width: 25,
  },
  logo: {
    height: 50,
    resizeMode: "contain",
    width: 75,
  },
});

export default PaymentCard;
