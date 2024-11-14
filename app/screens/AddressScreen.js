import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Add from "../components/Icons/Add";
import address from "../dataStructure/address";
import RowContainer from "../components/RowContainer";
import Screen from "../components/Screen";
import ScreenNavBar from "../components/ScreenNavBar";
import MediaObject from "../components/mediaObjects/MediaObject";

function AddressScreen(props) {
  return (
    <Screen style={styles.screen}>
      <ScreenNavBar screenName="Address" />
      <View style={styles.addressListContainer}>
        <FlatList
          data={address}
          keyExtractor={(address) => address.id.toString()}
          renderItem={({ item }) => (
            <MediaObject
              containerStyle={styles.mediaObject}
              body={item.body}
              image={item.image}
              imageSize={40}
              title={item.title}
            />
          )}
        />
      </View>
      <RowContainer style={styles.iconContainer}>
        <Add />
      </RowContainer>
    </Screen>
  );
}

const styles = StyleSheet.create({
  addressListContainer: {
    marginTop: 50,
    marginBottom: 60,
  },
  iconContainer: {
    justifyContent: "flex-end",
  },
  mediaObject: {
    marginBottom: 10,
  },
  screen: {
    padding: 25,
    paddingTop: 10,
  },
});

export default AddressScreen;
