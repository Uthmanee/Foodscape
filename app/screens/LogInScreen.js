import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import AppForm from "../components/Form/AppForm";
import AppFormField from "../components/Form/AppFormField";
import AppText from "../components/AppText";
import authStorage from "../auth/storage";
import ButtonText from "../components/ButtonText";
import colors from "../config/colors";
import Eye from "../components/Icons/Eye";
import login from "../api/auth";
import routes from "../navigation/routes";
import RowContainer from "../components/RowContainer";
import Screen from "../components/Screen";
import ScreenNameLarge from "../components/ScreenNameLarge";
import SubmitButton from "../components/Form/SubmitButton";
import useAuth from "../auth/useAuth";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function LogInScreen({ navigation }) {
  const [loading, setLoading] = useState(false);

  const { login: storeLogin } = useAuth();

  const handleSubmit = async ({ email, password }) => {
    setLoading(true);
    try {
      const response = await login(email, password);

      setLoading(false);

      if (!response.ok) {
        throw new Error("log in failed"); // Display response.problem in addition
      }

      storeLogin(response.data.idToken);

      authStorage.storeAuthMethod("email");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ActivityIndicator loading={loading} />
      <Screen style={styles.screen}>
        <ScreenNameLarge name="Log In" />
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/foodBro.png")}
          />
        </View>
        <AppText style={styles.welcomeMessage}>Welcome Back</AppText>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              label="Email or Phone number"
              name="email"
              textContentType="emailAddress"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              Icon={Eye}
              label="Password"
              name="password"
              secureTextEntry
              textContentType="password"
            />
            <ButtonText
              textStyle={styles.forgotPassword}
              color={colors.ash}
              text="Forgot password"
              onPress={() => navigation.navigate(routes.FORGOTPASSWORD)}
            />
            <SubmitButton action="Log In" />
            <RowContainer style={styles.signUpButtonContainer}>
              <AppText color={colors.tertiary}>Are you a new User? </AppText>
              <ButtonText
                textStyle={styles.signUpText}
                color={colors.primary}
                text="Sign Up"
                onPress={() => navigation.navigate(routes.SIGNUP)}
              />
            </RowContainer>
          </>
        </AppForm>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    marginTop: 5,
    marginBottom: 80,
    textAlign: "right",
  },
  image: {
    height: 157,
    width: 145,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 40,
    marginTop: 50,
  },
  screen: {
    backgroundColor: colors.backgroundColor,
    padding: 25,
    paddingTop: 10,
  },
  signUpButtonContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  signUpText: {
    fontSize: 17,
    fontWeight: "600",
  },
  welcomeMessage: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },
});

export default LogInScreen;
