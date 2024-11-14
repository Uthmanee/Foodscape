import React, { useContext } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { useDispatch } from "react-redux";

import AppForm from "./Form/AppForm";
import { cardActions } from "../store/paymentCard-slice";
import CardField from "./Form/CardField";
import CardPicker from "./CardPicker";
import { CardContext } from "../context/CardContext";
import cardValidationSchema from "../helper/cardValidationSchema";
import idGenerator from "../helper/idGenerator";
import RowContainer from "./RowContainer";
import SubmitButton from "./Form/SubmitButton";

function CardForm({ cardData, initialValues, formType }) {
  const dispatch = useDispatch();

  const { cardType, logo } = useContext(CardContext);

  const handleSumit = (values) => {
    if (formType.toLowerCase() === "add") {
      dispatch(
        cardActions.addCard({ ...values, id: idGenerator(), cardType, logo })
      );
    } else if (formType.toLowerCase() === "edit") {
      dispatch(cardActions.editCard({ ...values, ...cardData }));
    }
  };
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <CardPicker cardTypeData={cardData} />
        <AppForm
          initialValues={initialValues}
          onSubmit={handleSumit}
          validationSchema={cardValidationSchema}
        >
          <ScrollView contentContainerStyle={{}}>
            <CardField
              autoCapitalize="words"
              label="Card Name"
              maxLength={18}
              name="cardName"
            />
            <CardField
              keyboardType="numeric"
              label="Card Number"
              maxLength={19}
              name="cardNumber"
            />
            <RowContainer>
              <CardField
                label="Expiry Date"
                maxLength={5}
                name="expiryDate"
                placeholder="MM/YY"
                width="55%"
              />
              <CardField
                keyboardType="numeric"
                label="CVV"
                maxLength={3}
                name="cvv"
                width="35%"
              />
            </RowContainer>
          </ScrollView>
          <SubmitButton action="Submit" style={styles.submitButton} />
        </AppForm>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  submitButton: {
    marginTop: 25,
  },
});

export default CardForm;
