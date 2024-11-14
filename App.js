import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";

import AppNavigator from "./app/navigation/AppNavigator";
import { AuthContextProvider } from "./app/auth/context";
import authStorge from "./app/auth/storage";
import AuthNavigator from "./app/navigation/AuthNavigator";
import colors from "./app/config/colors";
import { LocationProvider } from "./app/context/LocationContext";
import navigationTheme from "./app/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import { StatusBar } from "expo-status-bar";
import store from "./app/store/store";
import useLocation from "./app/hooks/useLocation";

SplashScreen.preventAutoHideAsync();

function App(props) {
  const [user, setUser] = useState();
  const [appIsReady, setAppIsReady] = useState(false);

  const { location, locationReady, setLocation } = useLocation();

  useEffect(() => {
    const prepare = async () => {
      try {
        const user = await authStorge.getUser();
        user && setUser(user);
      } catch (error) {
        console.log(error);
      } finally {
        if (locationReady) {
          setAppIsReady(true);
        }
      }
    };

    prepare();
  }, [locationReady]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      style={{
        backgroundColor: colors.primary,
        flex: 1,
      }}
      onLayout={onLayoutRootView}
    >
      <StatusBar style="auto" />
      <OfflineNotice />
      <Provider store={store}>
        <LocationProvider value={{ location, setLocation }}>
          <AuthContextProvider value={{ user, setUser }}>
            <NavigationContainer theme={navigationTheme}>
              {user ? <AppNavigator /> : <AuthNavigator />}
            </NavigationContainer>
          </AuthContextProvider>
        </LocationProvider>
      </Provider>
    </View>
  );
}

export default App;
