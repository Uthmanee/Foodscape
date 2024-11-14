import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "../components/AppText";
import Screen from "../components/Screen";

function Settings(props) {
  return (
    <Screen>
      <AppText>Settings</AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Settings;
