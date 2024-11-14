import React from "react";
import { StyleSheet, View } from "react-native";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function SubmitButton({ action, style }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      style={[styles.container, style]}
      onPress={handleSubmit}
      shape="round"
    >
      {action}
    </AppButton>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SubmitButton;
