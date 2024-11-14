import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Account from "../components/Icons/Account.js";
import AddressScreen from "../screens/AddressScreen.js";
import TabNavigator from "./TabNavigator.js";
import colors from "../config/colors.js";
import CustomDrawerContent from "./CustomDrawerContent.js";
import Location from "../components/Icons/Location.js";
import OffersNpromos from "../screens/OffersNpromos.js";
import OrderTracking from "../screens/OrderTracking.js";
import PaymentCard from "../components/Icons/PaymentCard.js";
import PaymentCardsNavigator from "./PaymentCardsNavigator.js";
import PersonalInfoScreen from "../screens/PersonalInfoScreen.js";
import SettingsIcon from "../components/Icons/Settings.js";
import Settings from "../screens/Settings.js";
import Tracker from "../components/Icons/Tracker.js";

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName="App Tab"
        screenOptions={{
          drawerStyle: {
            borderTopRightRadius: 37,
            borderBottomRightRadius: 37,
            width: "95%",
          },
          headerShown: false,
          pressColor: colors.altBackgroundColor,
          swipeEnabled: false,
        }}
      >
        <Drawer.Screen
          name="App Tab"
          component={TabNavigator}
          options={{
            drawerItemStyle: { height: 0 },
          }}
        />
        <Drawer.Screen
          name="Personal Info"
          component={PersonalInfoScreen}
          options={{
            drawerIcon: () => <Account />,
          }}
        />
        <Drawer.Screen
          name="Address"
          component={AddressScreen}
          options={{
            drawerIcon: () => <Location />,
          }}
        />
        <Drawer.Screen
          name="Payment Cards"
          component={PaymentCardsNavigator}
          options={{
            drawerIcon: () => <PaymentCard />,
          }}
        />
        <Drawer.Screen
          name="Order Tracking"
          component={OrderTracking}
          options={{
            drawerIcon: () => <Tracker />,
          }}
        />
        <Drawer.Screen
          name="Offers and Promos"
          component={OffersNpromos}
          options={{
            drawerIcon: () => <Account />,
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerIcon: () => <SettingsIcon />,
          }}
        />
      </Drawer.Navigator>
    </GestureHandlerRootView>
  );
}
