import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppForm from "../components/Form/AppForm";
import AppFormField from "../components/Form/AppFormField";
import AppText from "../components/AppText";
import ButtonText from "../components/ButtonText";
import colors from "../config/colors";
import Eye from "../components/Icons/Eye";
import initializeUserdb from "../api/user";
import login from "../api/auth";
import routes from "../navigation/routes";
import RowContainer from "../components/RowContainer";
import Screen from "../components/Screen";
import ScreenNameLarge from "../components/ScreenNameLarge";
import signup from "../api/signup";
import SubmitButton from "../components/Form/SubmitButton";
import useAuth from "../auth/useAuth";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function SignUpScreen({ navigation }) {
  const [loading, setLoading] = useState(false);

  const { getUserId, login: storeLogin } = useAuth();

  const handleSubmit = async ({ email, password }) => {
    setLoading(true);
    try {
      const response = await signup(email, password);
      setLoading(false);

      if (!response.ok) {
        throw new Error("user creation failed");
      }

      const loginResponse = await login(email, password);

      if (!loginResponse) {
        throw new Error("login failed");
      }

      const userId = storeLogin(loginResponse.data.idToken);

      await initializeUserdb(userId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ActivityIndicator loading={loading} />
      <Screen style={styles.screen}>
        <ScreenNameLarge name="Sign Up" />
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/soupBowl.png")}
          />
        </View>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
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
          <AppText style={styles.text} color={colors.ash}>
            By Signing up you agree to our terms and Data policy.
          </AppText>
          <SubmitButton style={styles.submitButton} action="Sign Up" />
          {/* <AppText style={styles.orText}>OR</AppText> */}
          {/* <AppButton
            style={styles.button}
            color={colors.whiteButton}
            image={require("../assets/googleIcon.png")}
            onPress={() => {}}
            shape="round"
            textColor={colors.tertiary}
          >
            Continue with Google
          </AppButton>
          <AppButton
            color={colors.whiteButton}
            image={require("../assets/facebookIcon.png")}
            onPress={() => {}}
            shape="round"
            textColor={colors.tertiary}
          >
            Continue with Facebook
          </AppButton> */}
          <RowContainer style={styles.logInButtonContainer}>
            <AppText color={colors.tertiary}>Already an existing user?</AppText>
            <ButtonText
              textStyle={styles.logInText}
              color={colors.primary}
              onPress={() => navigation.navigate(routes.LOGIN)}
              text="Log In"
            />
          </RowContainer>
        </AppForm>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
  },
  image: {
    height: 103,
    width: 139,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 40,
    marginTop: 30,
  },
  logInButtonContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    // marginTop: 40,
  },
  logInText: {
    fontSize: 17,
    fontWeight: "600",
  },
  orText: {
    fontWeight: "600",
    marginVertical: 20,
    textAlign: "center",
  },
  screen: {
    padding: 25,
    paddingTop: 10,
  },
  submitButton: {
    marginVertical: 20, // clear if signin with google and fb is implemented
  },
  text: {
    fontSize: 11,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 30,
  },
});

export default SignUpScreen;

// import React, { useState } from "react";
// import { Image, StyleSheet, View } from "react-native";
// import * as Yup from "yup";

// import AppButton from "../components/AppButton";
// import AppForm from "../components/Form/AppForm";
// import AppFormField from "../components/Form/AppFormField";
// import AppText from "../components/AppText";
// import ButtonText from "../components/ButtonText";
// import colors from "../config/colors";
// import useGoogleSignIn, {
//   configureGoogleSignIn,
// } from "../auth/useGoogleSignIn";
// import Eye from "../components/Icons/Eye";
// import initializeUserdb from "../api/user";
// import login from "../api/auth";
// import routes from "../navigation/routes";
// import RowContainer from "../components/RowContainer";
// import Screen from "../components/Screen";
// import ScreenNameLarge from "../components/ScreenNameLarge";
// import signup from "../api/signup";
// import SubmitButton from "../components/Form/SubmitButton";
// import useAuth from "../auth/useAuth";
// import ActivityIndicator from "../components/ActivityIndicator";

// configureGoogleSignIn();

// const validationSchema = Yup.object({
//   email: Yup.string().required().email().label("Email"),
//   password: Yup.string().required().min(6).label("Password"),
// });

// function SignUpScreen({ navigation }) {
//   const [loading, setLoading] = useState(false);

//   const { login: storeLogin } = useAuth();

//   const { handleGoogleLogin } = useGoogleSignIn();

//   const handleSubmit = async ({ email, password }) => {
//     setLoading(true);
//     try {
//       const response = await signup(email, password);
//       setLoading(false);

//       if (!response.ok) {
//         throw new Error("user creation failed");
//       }

//       const loginResponse = await login(email, password);

//       if (!loginResponse) {
//         throw new Error("login failed");
//       }

//       const userId = storeLogin(loginResponse.data.idToken);

//       await initializeUserdb(userId);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <ActivityIndicator loading={loading} />
//       <Screen style={styles.screen}>
//         <ScreenNameLarge name="Sign Up" />
//         <View style={styles.imageContainer}>
//           <Image
//             style={styles.image}
//             source={require("../assets/soupBowl.png")}
//           />
//         </View>
//         <AppForm
//           initialValues={{ email: "", password: "" }}
//           onSubmit={handleSubmit}
//           validationSchema={validationSchema}
//         >
//           <AppFormField
//             autoCapitalize="none"
//             autoCorrect={false}
//             keyboardType="email-address"
//             label="Email or Phone number"
//             name="email"
//             textContentType="emailAddress"
//           />
//           <AppFormField
//             autoCapitalize="none"
//             autoCorrect={false}
//             Icon={Eye}
//             label="Password"
//             name="password"
//             secureTextEntry
//             textContentType="password"
//           />
//           <AppText style={styles.text} color={colors.ash}>
//             By Signing up you agree to our terms and Data policy.
//           </AppText>
//           <SubmitButton action="Sign Up" />
//           <AppText style={styles.orText}>OR</AppText>
//           <AppButton
//             style={styles.button}
//             color={colors.whiteButton}
//             image={require("../assets/googleIcon.png")}
//             onPress={() => handleGoogleLogin()}
//             shape="round"
//             textColor={colors.tertiary}
//           >
//             Continue with Google
//           </AppButton>
//           <AppButton
//             color={colors.whiteButton}
//             image={require("../assets/facebookIcon.png")}
//             onPress={() => {}}
//             shape="round"
//             textColor={colors.tertiary}
//           >
//             Continue with Facebook
//           </AppButton>
//           <RowContainer style={styles.logInButtonContainer}>
//             <AppText color={colors.tertiary}>Already an existing user?</AppText>
//             <ButtonText
//               textStyle={styles.logInText}
//               color={colors.primary}
//               onPress={() => navigation.navigate(routes.LOGIN)}
//               text="Log In"
//             />
//           </RowContainer>
//         </AppForm>
//       </Screen>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   button: {
//     marginBottom: 10,
//   },
//   image: {
//     height: 103,
//     width: 139,
//   },
//   imageContainer: {
//     alignItems: "center",
//     marginBottom: 40,
//     marginTop: 30,
//   },
//   logInButtonContainer: {
//     alignItems: "center",
//     flex: 1,
//     justifyContent: "center",
//     marginTop: 40,
//   },
//   logInText: {
//     fontSize: 17,
//     fontWeight: "600",
//   },
//   orText: {
//     fontWeight: "600",
//     marginVertical: 20,
//     textAlign: "center",
//   },
//   screen: {
//     padding: 25,
//     paddingTop: 10,
//   },
//   text: {
//     fontSize: 11,
//     textAlign: "center",
//     marginTop: 20,
//     marginBottom: 30,
//   },
// });

// export default SignUpScreen;
