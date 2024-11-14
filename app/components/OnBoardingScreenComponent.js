import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import AppButton from "./AppButton";
import AppText from "./AppText";
import ButtonText from "./ButtonText";
import colors from "../config/colors";
import RowContainer from "./RowContainer";

function OnBoardingScreen1({ image, onNext, onSkip, text1, text2, text3 }) {
  return (
    <View style={styles.screen}>
      <ImageBackground style={styles.backgroundImage} source={image}>
        <RowContainer style={styles.skipContainer}>
          <ButtonText
            style={styles.skip}
            color={colors.white}
            onPress={onSkip}
            text="Skip"
          />
        </RowContainer>
      </ImageBackground>
      <View style={styles.onBoardingTextContainer}>
        <View style={styles.textContainer}>
          <AppText style={styles.text}>{text1}</AppText>
          <AppText style={styles.text}>{text2}</AppText>
          <AppText style={styles.text}>{text3}</AppText>
        </View>
        <AppButton onPress={onNext} shape="round">
          Next
        </AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 2,
    padding: 25,
  },
  onBoardingTextContainer: {
    flex: 1,
    padding: 25,
  },
  screen: {
    backgroundColor: colors.white,
    flex: 1,
    paddingBottom: 10,
  },
  skip: {
    fontWeight: "600",
  },
  skipContainer: {
    justifyContent: "flex-end",
  },
  text: {
    fontWeight: "600",
    fontSize: 16,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
});

export default OnBoardingScreen1;
