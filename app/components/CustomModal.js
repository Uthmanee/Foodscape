import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppButton from "./AppButton";
import ButtonText from "./ButtonText";
import colors from "../config/colors";
import FocusAwareStatusBar from "./FocusAwareStatusBar";

function CustomModal({
  action,
  altAction,
  children,
  image,
  onCloseModal,
  modalIsVisible,
}) {
  const handleCloseModal = () => {
    onCloseModal();
  };

  if (!modalIsVisible) return null;
  return (
    <View style={styles.overlay}>
      <FocusAwareStatusBar
        statusBarBackgroundColor="rgba(0,0,0, 0)"
        statusBarStyle="light"
      />
      <View style={styles.modalContentContainer}>
        <Image style={styles.image} source={image} />
        <>{children}</>
        <AppButton
          onPress={handleCloseModal}
          style={styles.button}
          shape="round"
        >
          {action}
        </AppButton>
        {altAction && (
          <ButtonText
            color={colors.primary}
            text={altAction}
            textStyle={{ textDecorationLine: "underline" }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    paddingHorizontal: 35,
    paddingVertical: 7,
    width: "auto",
  },
  image: {
    height: 180,
    resizeMode: "contain",
    width: 290,
  },
  modalContentContainer: {
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 10,
    paddingVertical: 25,
  },
  overlay: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0, 0.5)",
    height: "100%",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
});

export default CustomModal;
