// import { useState } from "react";
// import {
//   GoogleSignin,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";

// import authStorage from "./storage";
// import initializeUserdb from "../api/user";
// import useAuth from "./useAuth";

// export const configureGoogleSignIn = () => {
//   GoogleSignin.configure({
//     androidClientId:
//       "267070101593-2l6iaf7p8lree9j54a4gi7kk5or7qcm6.apps.googleusercontent.com",
//     scopes: ["profile", "email"],
//   });
// };

// const useGoogleSignIn = () => {
//   const { login: storeLogin } = useAuth();

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const GoogleLogin = async () => {
//     await GoogleSignin.hasPlayServices();
//     const userInfo = await GoogleSignin.signIn();
//     return userInfo;
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       setLoading(true);

//       const response = await GoogleLogin();
//       const { idToken } = response;

//       setLoading(false);

//       const userId = storeLogin(idToken);
//       await initializeUserdb(userId);

//       authStorage.storeAuthMethod("google");
//     } catch (error) {
//       console.log("Message", error.message);
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         return;
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         return;
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         setError("Play Services Not Available");
//       } else {
//         setError("An error occured");
//       }
//     }
//   };

//   const googleSignOut = async () => {
//     try {
//       await GoogleSignin.revokeAccess();
//       await GoogleSignin.signOut();
//       setUser(null);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return { error, handleGoogleLogin, loading, googleSignOut };
// };

// export default useGoogleSignIn;
