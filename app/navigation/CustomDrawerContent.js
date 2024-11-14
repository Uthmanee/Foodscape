import React, { useContext } from "react";
import { Image, StyleSheet, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

import AppText from "../components/AppText";
import ButtonText from "../components/ButtonText";
import colors from "../config/colors";
import Logout from "../components/Icons/Logout";
import ProfileMenuItem from "../components/ProfileMenuItem";
import authStorage from "../auth/storage";
import useAuth from "../auth/useAuth";
// import useGoogleSignIn from "../auth/useGoogleSignIn";

const CustomDrawerContent = (props) => {
  const { logout } = useAuth();
  // const { googleSignOut } = useGoogleSignIn();

  const handleLogout = async () => {
    // const authMethod = await authStorage.getAuthMethod();

    // if (authMethod === "google") {
    // googleSignOut();
    // }

    logout();
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/ProfileImage.png")}
          />
        </View>
        <AppText style={styles.profileName}>Awwal</AppText>
        <View style={styles.listContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View>
        <ProfileMenuItem
          containerStyle={styles.logOutContainer}
          IconComponent={Logout}
          item="Log Out"
          onPress={handleLogout}
        />
      </View>
      <ButtonText
        text="Close"
        textStyle={styles.closeButton}
        color={colors.primary}
        onPress={() => props.navigation.closeDrawer()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    borderTopRightRadius: 37,
    borderBottomRightRadius: 37,
    flex: 1,
    overflow: "hidden",
    padding: 15,
  },
  closeButton: {
    fontSize: 20,
    marginTop: 20,
    textAlign: "center",
  },
  image: {
    borderRadius: 58,
    height: 116,
    width: 116,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  logOutContainer: {
    backgroundColor: "#fff",
  },
  profileName: {
    fontWeight: "600",
    marginBottom: 20,
    marginTop: 10,
    textAlign: "center",
  },
});

export default CustomDrawerContent;
