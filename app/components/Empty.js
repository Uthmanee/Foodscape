import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppButton from "./AppButton";
import AppText from "./AppText";
import colors from "../config/colors";
import routes from "../navigation/routes";

function Empty({
  buttonText = "Start Ordering",
  dataType,
  Icon,
  image,
  onPress,
  text1,
  text2,
}) {
  const navigation = useNavigation();

  const handlePress = () => {
    if (!onPress) {
      navigation.navigate("Home", { screen: routes.HOME });
      return;
    }
    onPress();
  };

  return (
    <>
      <View style={styles.imageContainer}>
        {image && <Image style={styles.image} source={image} />}
        {Icon}
        <AppText style={styles.text} color={colors.secondary}>
          {text1}
        </AppText>
        <AppText color={colors.ash}>{text2}</AppText>
      </View>
      {dataType !== "cards" && (
        <AppButton
          style={styles.startOrderingButton}
          shape="round"
          onPress={handlePress}
        >
          {buttonText}
        </AppButton>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 140,
    marginBottom: 20,
    width: 140,
  },
  imageContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  startOrderingButton: {
    marginBottom: 10,
  },
  text: {
    fontWeight: "600",
  },
});

export default Empty;
