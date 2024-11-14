import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";

const key = "authToken";
const key2 = "authMethod";
const key3 = "@viewedOnboarding";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const storeAuthMethod = async (authMethod) => {
  try {
    await SecureStore.setItemAsync(key2, authMethod);
  } catch (error) {
    console.log("Error storing the onboarding state", error);
  }
};

const storeOnboardingState = async () => {
  try {
    await AsyncStorage.setItem(key3, "true");
  } catch (error) {
    console.log("Error storing the onboarding state", error);
  }
};

const getAuthMethod = async () => {
  try {
    return await SecureStore.getItemAsync(key2);
  } catch (error) {
    console.log("Error getting the auth method", error);
  }
};

const getOnboardingState = async () => {
  try {
    return await AsyncStorage.getItem(key3);
  } catch (error) {
    console.log("Error getting the onboarding state", error);
  }
};

const removeAuthMethod = async () => {
  try {
    await SecureStore.deleteItemAsync(key2);
  } catch (error) {
    console.log("Error removing the auth method", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

export default {
  getToken,
  getUser,
  getAuthMethod,
  getOnboardingState,
  removeAuthMethod,
  removeToken,
  storeAuthMethod,
  storeOnboardingState,
  storeToken,
};
