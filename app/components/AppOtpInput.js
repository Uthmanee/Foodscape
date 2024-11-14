import React, { useState, useRef } from "react";
import { TextInput, StyleSheet } from "react-native";
import colors from "../config/colors";
import RowContainer from "./RowContainer";
import AppText from "./AppText";

const OTPInput = ({ error, length, onComplete, style }) => {
  const [otp, setOTP] = useState(new Array(length).fill(""));
  const [focusedIndex, setFocusedIndex] = useState(null); // Track the focused input index
  const inputRefs = useRef([]);

  const handleOTPChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
    onComplete(newOTP.join(""));
  };

  const handleBackspace = (index, event) => {
    if (
      event.nativeEvent.key === "Backspace" &&
      index === length - (length - index)
    ) {
      inputRefs.current[index].focus();
    }
    if (event.nativeEvent.key === "Backspace" && index > 0 && !otp[index]) {
      const newOTP = [...otp];
      setOTP(newOTP);
      inputRefs.current[index - 1].focus(); // Move focus to the previous input
    }
  };

  return (
    <>
      <RowContainer style={[style, styles.container]}>
        {Array(length)
          .fill()
          .map((_, index) => (
            <TextInput
              cursorColor={colors.ash}
              key={index}
              style={[
                error ? styles.error : null,
                styles.input,
                focusedIndex === index && styles.focusedInput,
              ]}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(text) => handleOTPChange(index, text)}
              onFocus={() => setFocusedIndex(index)}
              onKeyPress={(event) => handleBackspace(index, event)}
              ref={(ref) => (inputRefs.current[index] = ref)}
            />
          ))}
      </RowContainer>
      {error && (
        <AppText style={styles.errorMessage} color="red">
          Invalid code. Check the code and try again
        </AppText>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  focusedInput: {
    backgroundColor: colors.ash,
  },
  error: {
    borderColor: "red",
    borderWidth: 1,
  },
  errorMessage: {
    textAlign: "center",
    marginTop: 7,
  },
  input: {
    backgroundColor: colors.grey,
    borderRadius: 8,
    height: 58,
    marginLeft: 5,
    textAlign: "center",
    width: 69,
  },
});

export default OTPInput;
