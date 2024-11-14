import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import ScreenNavBar from "../components/ScreenNavBar";
import AppText from "../components/AppText";
import colors from "../config/colors";
import PersonalInfoItem from "../components/PersonalInfoItem";

const BorderRadius = 10;

function PersonalInfoScreen(props) {
  return (
    <Screen style={styles.screen}>
      <ScreenNavBar screenName="Personal Information" />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/ProfileImage.png")}
        />
      </View>
      <View style={styles.changeContainer}>
        <AppText color={colors.primary}>Change</AppText>
      </View>
      <View style={styles.infoItemContainer}>
        <PersonalInfoItem
          style={styles.firstItem}
          field="First Name"
          value="Awwal"
        />
        <PersonalInfoItem field="Last Name" value="Adebisi" />
        <PersonalInfoItem field="Email" value="awwal@gmail.com" />
        <PersonalInfoItem field="Phone Number" value="+1 9765 222 87" />
        <PersonalInfoItem
          style={styles.lastItem}
          field="Phone Number"
          value="**********"
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  changeContainer: {
    alignSelf: "center",
    backgroundColor: colors.altBackgroundColor,
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 30,
  },
  firstItem: {
    borderTopLeftRadius: BorderRadius,
    borderTopRightRadius: BorderRadius,
  },
  infoItemContainer: {
    marginTop: 40,
  },
  image: {
    borderRadius: 58,
    height: 120,
    marginBottom: 20,
    marginTop: 30,
    width: 120,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  lastItem: {
    borderBottomLeftRadius: BorderRadius,
    borderBottomRightRadius: BorderRadius,
  },
  screen: {
    padding: 25,
    paddingTop: 10,
  },
});

export default PersonalInfoScreen;
