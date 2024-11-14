import React from "react";
import { StyleSheet, View } from "react-native";

import { CardProvider } from "../context/CardContext";
import CardForm from "../components/CardForm";
import Screen from "../components/Screen";
import ScreenNavBar from "../components/ScreenNavBar";
import { cardActions } from "../store/paymentCard-slice";
import useCardContextValues from "../hooks/useCardContextValues";
import useCardFormSubmit from "../hooks/useCardFormSubmit";
import ActivityIndicator from "../components/ActivityIndicator";
import CardModal from "../components/CardModal";
import Notification from "../components/Notification";
import { useDispatch, useSelector } from "react-redux";
import useNotification from "../hooks/useNotification";

function NewCardScreen(props) {
  const dispatch = useDispatch();

  const value = useCardContextValues();

  const { uploading, setModalIsVisible, showModal } = useCardFormSubmit();

  // const { notification: cardNotification } = useSelector((state) => state.card);

  const { notification, notificationVisible, setNotificationVisible } =
    useNotification("card", "already");

  // console.log(notificationVisible, notification);

  return (
    <>
      <ActivityIndicator loading={uploading} />
      <CardModal
        modalIsVisible={showModal}
        setModalIsVisible={setModalIsVisible}
        type="add"
      />
      <Screen style={styles.screen}>
        <View style={{ alignItems: "center" }}>
          <Notification
            visible={notificationVisible}
            message={notification}
            onHide={() => {
              setNotificationVisible(false);
              dispatch(cardActions.resetNotification());
            }}
          />
        </View>
        <ScreenNavBar style={styles.screenNavBar} screenName="Add New Card" />
        <CardProvider value={value}>
          <CardForm
            formType="add"
            initialValues={{
              cardName: "",
              cardNumber: "",
              cvv: "",
              expiryDate: "",
            }}
          />
        </CardProvider>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  screenNavBar: {
    marginBottom: 10,
  },
});

export default NewCardScreen;
