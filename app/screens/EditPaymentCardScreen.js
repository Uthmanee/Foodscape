import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

import ActivityIndicator from "../components/ActivityIndicator";
import { cardActions } from "../store/paymentCard-slice";
import CardForm from "../components/CardForm";
import { CardProvider } from "../context/CardContext";
import CardModal from "../components/CardModal";
import Notification from "../components/Notification";
import Screen from "../components/Screen";
import ScreenNavBar from "../components/ScreenNavBar";
import useCardContextValues from "../hooks/useCardContextValues";
import useCardFormSubmit from "../hooks/useCardFormSubmit";
import useNotification from "../hooks/useNotification";

function EditPaymentCardScreen({ route }) {
  const { cardName, cardNumber, cardType, cvv, expiryDate, id, logo } =
    route.params;

  const value = useCardContextValues({
    cardName,
    cardNumber,
    cardType,
    cvv,
    expiryDate,
    logo,
  });

  const { uploading, setModalIsVisible, showModal } = useCardFormSubmit();

  const dispatch = useDispatch();

  const {
    notification: notificationMessage,
    notificationVisible,
    setNotificationVisible,
  } = useNotification("card", "changes");

  return (
    <>
      <ActivityIndicator loading={uploading} />
      <CardModal
        modalIsVisible={showModal}
        setModalIsVisible={setModalIsVisible}
      />
      <Screen style={styles.screen}>
        <View style={{ alignItems: "center" }}>
          <Notification
            visible={notificationVisible}
            message={notificationMessage}
            onHide={() => {
              setNotificationVisible(false);
              dispatch(cardActions.resetNotification());
            }}
          />
        </View>
        <ScreenNavBar style={styles.screenNavBar} screenName="Edit Card" />
        <CardProvider value={value}>
          <CardForm
            cardData={{ cardType, id, logo }}
            formType="edit"
            initialValues={{
              cardName,
              cardNumber,
              cvv,
              expiryDate,
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
    marginBottom: 20,
  },
});

export default EditPaymentCardScreen;
