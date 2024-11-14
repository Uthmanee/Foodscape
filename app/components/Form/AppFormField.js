import React from "react";
import { StyleSheet, View } from "react-native";
import { useFormikContext } from "formik";

import AppInput from "../AppInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ Icon, label, name, ...otherProps }) {
  const { errors, setFieldValue, setFieldTouched, touched, values } =
    useFormikContext();
  return (
    <>
      <AppInput
        Icon={Icon}
        label={label}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppFormField;
