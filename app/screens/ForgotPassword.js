import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import AppForm from "../components/Form/AppForm";
import AppFormField from "../components/Form/AppFormField";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import ScreenInstruction from "../components/ScreenInstruction";
import ScreenNameLarge from "../components/ScreenNameLarge";
import SubmitButton from "../components/Form/SubmitButton";

const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
});

function ForgotPassword(navigation) {
  return (
    <Screen style={styles.screen}>
      <ScreenNameLarge name="Forgot Password" />
      <ScreenInstruction
        style={styles.screenInstruction}
        text="Enter your email address to reset your password."
      />
      <AppForm
        validationSchema={validationSchema}
        initialValues={{ email: "" }}
        onSubmit={(values) => navigation.navigate(routes.RESETPASSWORD)}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          label="Email Address"
          name="email"
          textContentType="emailAddress"
        />
        <SubmitButton style={styles.submitButton} action="Send link" />
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
  submitButton: {
    marginTop: 40,
  },
});

export default ForgotPassword;
