import React, { useState } from "react";
import {
  FlatList,
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import MediaObject from "./mediaObjects/MediaObject";

const addresses = [
  { id: 1, address: "Ibuloko, Ayobo, Lagos", addressType: "Work" },
  { id: 2, address: "Unilag, Akoka, Lagos", addressType: "School" },
];

function AddressPicker() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [selectedAddress, setSelectedAddress] = useState(null);

  const openModal = () => {
    setModalIsVisible(true);
  };

  const closeModal = () => {
    setModalIsVisible(false);
  };
  return (
    <>
      <TouchableOpacity onPress={openModal}>
        <MediaObject
          containerStyle={styles.mediaObjectContainer}
          body={
            selectedAddress
              ? selectedAddress.address
              : "Oremeji Street, Oshodi/Isolo, Nigeria"
          }
          image={require("../assets/address.png")}
          imageSize={40}
          itemIsSelected={true}
          title={selectedAddress ? selectedAddress.addressType : "Home"}
        />
      </TouchableOpacity>
      <Modal visible={modalIsVisible} animationType="slide">
        <View style={styles.modal}>
          <FlatList
            data={addresses}
            keyExtractor={(addressItem) => addressItem.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  closeModal();
                  setSelectedAddress(item);
                }}
              >
                <MediaObject
                  body={item.address}
                  containerStyle={styles.mediaObjectContainer2}
                  image={require("../assets/address.png")}
                  title={item.addressType}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  mediaObjectContainer2: {
    paddingVertical: 12,
    marginBottom: 10,
  },
  modal: {
    paddingHorizontal: 20,
  },
});

export default AddressPicker;
