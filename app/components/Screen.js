import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";

import colors from "../config/colors";
import FocusAwareStatusBar from "./FocusAwareStatusBar";

export default function Screen({
  backgroundColor = colors.backgroundColor,
  children,
  screen,
  statusBarStyle,
  statusBarBackgroundColor,
  style,
}) {
  return (
    <SafeAreaView style={[styles.screen, { backgroundColor }]}>
      <FocusAwareStatusBar
        screen={screen}
        statusBarBackgroundColor={statusBarBackgroundColor}
        statusBarStyle={statusBarStyle}
      />
      <View style={[styles.screenContentArea, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  screenContentArea: {
    flex: 1,
  },
});
