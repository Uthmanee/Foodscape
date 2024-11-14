// The file is no longer needed. It shoul be deleted

// import React, { useEffect, useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// import OnboardingScreen from "../screens/OnboardingScreen";

// const Stack = createStackNavigator();

// const MainNavigator = () => {
//   const [isFirstLaunch, setIsFirstLaunch] = useState(null);

//   useEffect(() => {
//     AsyncStorage.getItem("alreadyLaunched").then((value) => {
//       if (value === null) {
//         AsyncStorage.setItem("alreadyLaunched", "true");
//         setIsFirstLaunch(true);
//       } else {
//         setIsFirstLaunch(false);
//       }
//     });
//   }, []);

//   if (isFirstLaunch === null) {
//     return null; // or a loading spinner
//   } else if (isFirstLaunch === true) {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Onboarding">
//           <Stack.Screen name="Onboarding" component={OnboardingScreen} />
//           <Stack.Screen name="Login" component={LoginScreen} />
//           <Stack.Screen name="Home" component={HomeScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   } else {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Login">
//           <Stack.Screen name="Login" component={LoginScreen} />
//           <Stack.Screen name="Home" component={HomeScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// };

// export default MainNavigator;
