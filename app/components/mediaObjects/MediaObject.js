import React from "react";
import { Image, View, StyleSheet } from "react-native";

import AppText from "../AppText";
import colors from "../../config/colors";
import RowContainer from "../RowContainer";
import ChevronRight from "../Icons/ChevronRight";
import cardNumberFormatter from "../../helper/cardNumberFormatter";

const textShortner = (text, n) =>
  text.length > n ? text.slice(0, n) + "..." : text;

export default function MediaObject({
  body,
  containerStyle,
  image,
  imageSize = 30,
  itemIsSelected,
  paymentCard = false,
  title,
}) {
  return (
    <RowContainer
      style={[
        styles.container,
        containerStyle,
        itemIsSelected ? styles.mediaObjectContainerActive : null,
      ]}
    >
      <Image
        style={[styles.image, { height: imageSize, width: imageSize }]}
        source={image}
      />
      <View style={styles.textContainer}>
        <AppText style={styles.text} color={colors.ash}>
          {title}
        </AppText>
        <AppText style={styles.text}>
          {paymentCard ? cardNumberFormatter(body) : textShortner(body, 30)}
        </AppText>
      </View>
      <ChevronRight color={colors.primary} />
    </RowContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 18,
    paddingVertical: 16,
  },
  image: {
    height: 45,
    marginRight: 10,
    resizeMode: "contain",
    width: 45,
  },
  mediaObjectContainerActive: {
    borderWidth: 0.5,
    borderColor: colors.primary,
  },
  text: {
    fontSize: 16,
  },
  textContainer: {
    flexGrow: 1,
    marginHorizontal: 5,
  },
});
