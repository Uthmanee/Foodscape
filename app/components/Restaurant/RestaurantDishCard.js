import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

import AppText from "../AppText";
import colors from "../../config/colors";

export default function RestaurantDishCard({ imageUrl, onPress, text }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground style={styles.cardBackground} source={{ uri: imageUrl }}>
        <AppText style={styles.text} color={colors.white}>
          {text}
        </AppText>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardBackground: {
    alignItems: "center",
    borderRadius: 15,
    height: 204,
    justifyContent: "center",
    marginVertical: 10,
    overflow: "hidden",
  },
  text: {
    fontSize: 20,
    fontWeight: 700,
  },
});
