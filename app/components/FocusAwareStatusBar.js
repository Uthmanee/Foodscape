import * as React from "react";
import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import colors from "../config/colors";

function FocusAwareStatusBar({
  screen,
  statusBarBackgroundColor = colors.backgroundColor,
  statusBarStyle = "dark",
}) {
  if (screen === "home") return;

  const isFocused = useIsFocused();

  return isFocused ? (
    <StatusBar
      backgroundColor={statusBarBackgroundColor}
      style={statusBarStyle}
    />
  ) : null;
}

export default FocusAwareStatusBar;
