import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import AppForm from "../components/Form/AppForm";
import AppFormField from "../components/Form/AppFormField";
import Eye from "../components/Icons/Eye";
import Screen from "../components/Screen";
import ScreenInstruction from "../components/ScreenInstruction";
import ScreenNameLarge from "../components/ScreenNameLarge";
import SubmitButton from "../components/Form/SubmitButton";

const validationSchema = Yup.object({
  password: Yup.string().required().min(6).label("Password"),
});

function ResetPassword(props) {
  return (
    <Screen style={styles.screen}>
      <ScreenNameLarge style={styles.screenName} name="Reset Password" />
      <AppForm
        validationSchema={validationSchema}
        initialValues={{ password: "" }}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          Icon={Eye}
          label="Enter New Password"
          name="password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton style={styles.submitButton} action="Reset" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 25,
    paddingTop: 10,
  },
  screenInstruction: {
    marginTop: 20,
    marginBottom: 30,
  },
  screenName: {
    marginBottom: 40,
  },
  submitButton: {
    marginTop: 40,
  },
});

export default ResetPassword;
