import React from "react";
import { View, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

import colors from "../config/colors";
import OnBoardingScreenComponent from "../components/OnBoardingScreenComponent";
import routes from "../navigation/routes";

const OnboardingData = [
  {
    image: require("../assets/onboardingImage_1.png"),
    text1: "Quickly order for the best and",
    text2: "affordable meals anywhere,",
    text3: "anytime.",
  },
  {
    image: require("../assets/onboardingImage_2.png"),
    text1: "We have the best restaurants with",
    text2: "exquisite local and international,",
    text3: "dishes.",
  },
  {
    image: require("../assets/onboardingImage_3.png"),
    text1: "order for your frequent meals and",
    text2: "side dishes just with 2 clicks.",
  },
];

const OnboardingScreen = ({ navigation }) => {
  const totalSlides = OnboardingData.length;
  const lastIndex = totalSlides - 1;

  const handleNext = (swiper) => {
    if (swiper) {
      const currentIndex = swiper.state.index;
      const nextIndex = currentIndex + 1;
      if (nextIndex >= totalSlides) {
        navigation.navigate(routes.LOGIN);
        return;
      }
      swiper.scrollBy(nextIndex - currentIndex);
    }
  };

  const handleSkip = (swiper) => {
    if (swiper) {
      const currentIndex = swiper.state.index;
      const nextIndex = currentIndex + 1;
      if (nextIndex >= totalSlides) {
        navigation.navigate(routes.LOGIN);
        return;
      }
      swiper.scrollBy(lastIndex - swiper.state.index);
    }
  };

  return (
    <Swiper
      style={styles.wrapper}
      ref={(swiper) => {
        this.swiperRef = swiper;
      }}
      loop={false}
      paginationStyle={styles.paginationStyle}
      dot={<View style={styles.dot} />}
      activeDot={<View style={[styles.dot, styles.activeDot]} />}
    >
      {OnboardingData.map((item, index) => (
        <OnBoardingScreenComponent
          image={item.image}
          onSkip={() => handleSkip(this.swiperRef)}
          onNext={() => handleNext(this.swiperRef)}
          text1={item.text1}
          text2={item.text2}
          text3={item.text3}
          key={index}
        />
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  paginationStyle: {
    bottom: 120,
  },
  dot: {
    backgroundColor: colors.primary,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    opacity: 0.5,
  },
  activeDot: {
    backgroundColor: colors.primary,
    opacity: 1,
  },
});

export default OnboardingScreen;
