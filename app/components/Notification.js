import React, { useEffect, useRef } from "react";
import { Text, StyleSheet, Animated, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const Notification = ({ message, visible, onHide }) => {
  const slideAnim = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    if (visible) {
      // Slide in
      Animated.timing(slideAnim, {
        toValue: height - 120, // Adjust as needed
        duration: 300,
        useNativeDriver: true,
      }).start();

      // Hide after 3 seconds
      const timer = setTimeout(() => {
        Animated.timing(slideAnim, {
          toValue: height,
          duration: 300,
          useNativeDriver: true,
        }).start(() => onHide());
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  // Interpolating opacity based on slideAnim value
  const opacity = slideAnim.interpolate({
    inputRange: [height - 170, height - 120, height],
    outputRange: [0, 1, 0],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={[
        styles.notification,
        { transform: [{ translateY: slideAnim }], opacity: opacity },
      ]}
    >
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  notification: {
    borderRadius: 25,
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "rgba(0,0,0,0.8)",
    zIndex: 1000,
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
});

export default Notification;
