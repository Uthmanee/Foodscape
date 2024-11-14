import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppText from "./AppText";
import colors from "../config/colors";
import routes from "../navigation/routes";
import CustomModal from "./CustomModal";

function CardModal({ modalIsVisible, setModalIsVisible, type }) {
  const navigation = useNavigation();

  const handleCloseModal = () => {
    navigation.navigate(routes.PAYMENTCARDS);
    setModalIsVisible(false);
  };

  return (
    <CustomModal
      action="continue"
      image={require("../assets/Done.jpg")}
      modalIsVisible={modalIsVisible}
      onCloseModal={handleCloseModal}
    >
      <AppText style={styles.text} color={colors.ash}>
        {type === "add" ? "Card Added Succefully" : "Card Edited Succesfully"}
      </AppText>
    </CustomModal>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    paddingHorizontal: 35,
    paddingVertical: 7,
    width: "auto",
  },
  text: {
    marginVertical: 10,
  },
});

export default CardModal;
