import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "../components/AppText";
import Screen from "../components/Screen";

function OrderTracking(props) {
  return (
    <Screen>
      <AppText>Order Tracking</AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default OrderTracking;
