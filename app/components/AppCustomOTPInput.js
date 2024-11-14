import React, { useRef, useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

const AppCustomOTPInput = ({ length = 6, onComplete, secure }) => {
  const inputRefs = Array(length)
    .fill()
    .map(() => useRef(null));
  const [otpValues, setOtpValues] = useState(Array(length).fill(""));
  const [activeInput, setActiveInput] = useState(0);

  const handleInput = (index, text) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = text;
    setOtpValues(newOtpValues);

    // inputRefs[index].current.setNativeProps({ text });
    setActiveInput(index);

    if (text && index < length - 1) {
      inputRefs[index + 1].current.focus();
    }

    if (text && index === length - 1) {
      inputRefs[index].current.focus();
    }

    const otp = newOtpValues.join("");
    if (otp.length === length) {
      onComplete(otp);
    }
  };

  const handleBackspace = (index, text) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = text;
    setOtpValues(newOtpValues);

    if (!text && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <View style={styles.container}>
      {Array(length)
        .fill()
        .map((_, index) => (
          <View key={index} style={styles.inputContainer}>
            <TextInput
              ref={inputRefs[index]}
              style={[styles.input]}
              maxLength={1}
              secureTextEntry={secure && true}
              keyboardType="numeric"
              onChangeText={(text) => handleInput(index, text)}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Backspace") {
                  handleBackspace(index, inputRefs[index].current.value);
                }
              }}
              onFocus={() => {
                setActiveInput(index);
              }}
              onBlur={() => {
                setActiveInput(-1);
              }}
            />
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  input: {
    backgroundColor: colors.grey,
    width: "100%",
    height: "100%",
    textAlign: "center",
    overflow: "hidden",
  },
  inputContainer: {
    width: 44,
    height: 44,
    marginHorizontal: 7,
    borderRadius: 8.84,
    overflow: "hidden",
  },
});

export default AppCustomOTPInput;
