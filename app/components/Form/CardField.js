import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { useFormikContext } from "formik";

import AppInput from "../AppInput";
import { CardContext } from "../../context/CardContext";
import cardNumberInputFormatter from "../../helper/cardNumberInputFormatter";
import ErrorMessage from "./ErrorMessage";
import expiryDateFormatter from "../../helper/expiryDateFormatter";

function CardField({ Icon, label, name, width, ...otherProps }) {
  const { errors, setFieldValue, setFieldTouched, touched, values } =
    useFormikContext();

  const { handleCardName, handleCardNumber, handleCvv, handleExpiryDate } =
    useContext(CardContext);

  const onChangeTextHandler = (text) => {
    if (name === "cardNumber") {
      const formatted = cardNumberInputFormatter(text);
      if (formatted.length > 19) return;
      setFieldValue(name, formatted);
      handleCardNumber(formatted);
      return;
    }
    if (name === "expiryDate") {
      const formatted = expiryDateFormatter(text);
      if (formatted.length === 0) {
        setFieldValue(name, "");
        handleExpiryDate("");
        return;
      }
      setFieldValue(name, formatted);
      handleExpiryDate(formatted);
      return;
    }
    name == "cardName"
      ? handleCardName(text)
      : name == "cvv"
      ? handleCvv(text)
      : null;
    setFieldValue(name, text);
  };
  return (
    <View style={{ width }}>
      <AppInput
        Icon={Icon}
        label={label}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => onChangeTextHandler(text)}
        paddingVertical={13}
        style={styles.container}
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 3,
    marginTop: 5,
  },
});

export default CardField;
