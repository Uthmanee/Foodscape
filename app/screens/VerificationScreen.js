import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

import AppCustomOtpInput from "../components/AppCustomOTPInput";
import AppOtpInput from "../components/AppOtpInput";
import colors from "../config/colors";
import RowContainer from "../components/RowContainer";
import Screen from "../components/Screen";
import ScreenNameLarge from "../components/ScreenNameLarge";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ButtonText from "../components/ButtonText";
import ScreenInstruction from "../components/ScreenInstruction";

function VerificationScreen(props) {
  // receive otp from backend
  const receeivedOTP = "2222";

  const [otp, setOTP] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleOTPComplete = (otp) => {
    setOTP(otp);
    setButtonDisabled(false);
  };

  const verify = () => {
    if (otp !== receeivedOTP) {
      setButtonDisabled(true);
    }

    if (otp === receeivedOTP) setButtonDisabled(false); // Go to a new page
  };

  return (
    <Screen style={styles.screen}>
      <ScreenNameLarge name="Verify Account" />
      <ScreenInstruction
        style={styles.screenInstruction}
        text="Enter the code sent to your mail or phone number."
      />
      <AppOtpInput
        error={buttonDisabled}
        length={4}
        onComplete={handleOTPComplete}
        style={styles.otpInput}
      />
      <AppButton
        style={styles.button}
        disabled={buttonDisabled}
        onPress={verify}
        shape="round"
      >
        Verify
      </AppButton>
      <RowContainer style={styles.resendButtonContainer}>
        <ScreenInstruction text="I didn't receive a code! " />
        <ButtonText
          text="Resend"
          color={colors.primary}
          textStyle={styles.resendButton}
        />
      </RowContainer>
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
  },
  otpInput: {
    marginTop: 50,
  },
  screenInstruction: {
    marginTop: 20,
  },
  resendButton: {
    fontSize: 17,
  },
  resendButtonContainer: {
    justifyContent: "center",
    marginTop: 20,
  },
  screen: {
    backgroundColor: colors.backgroundColor,
    padding: 25,
    paddingTop: 10,
  },
});

export default VerificationScreen;
