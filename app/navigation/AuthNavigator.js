import { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import authStorage from "../auth/storage";
import ForgotPassword from "../screens/ForgotPassword";
import LogInScreen from "../screens/LogInScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import ResetPassword from "../screens/ResetPassword";
import routes from "./routes";
import SignUpScreen from "../screens/SignUpScreen";
import VerificationScreen from "../screens/VerificationScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    const checkOnboardingState = async () => {
      const onboardingState = await authStorage.getOnboardingState();

      if (onboardingState === null) {
        await authStorage.storeOnboardingState();
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    };

    checkOnboardingState();
  }, []);

  return (
    isFirstLaunch !== null && (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isFirstLaunch && (
          <Stack.Screen name={routes.ONBOARDING} component={OnboardingScreen} />
        )}
        <Stack.Screen name={routes.LOGIN} component={LogInScreen} />
        <Stack.Screen name={routes.SIGNUP} component={SignUpScreen} />
        <Stack.Screen name={routes.FORGOTPASSWORD} component={ForgotPassword} />
        <Stack.Screen name={routes.RESETPASSWORD} component={ResetPassword} />
        <Stack.Screen
          name={routes.VERIFICATION}
          component={VerificationScreen}
        />
      </Stack.Navigator>
    )
  );
};

export default AuthNavigator;
