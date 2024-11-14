import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

import AppText from "./AppText";
import RowContainer from "./RowContainer";

const TabbedInterface = ({
  content1,
  content2,
  content3,
  tab1,
  tab2,
  tab3,
}) => {
  const [activeTab, setActiveTab] = useState(2); // Initial active tab is 2

  // Function to handle tab selection
  const handleTabPress = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <View style={styles.container}>
      {/* Tab Buttons */}
      <RowContainer>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => handleTabPress(1)}
        >
          <AppText
            style={[
              styles.tabButtonText,
              activeTab === 1 && styles.activeTabButtonText,
            ]}
          >
            {tab1}
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => handleTabPress(2)}
        >
          <AppText
            style={[
              styles.tabButtonText,
              activeTab === 2 && styles.activeTabButtonText,
            ]}
          >
            {tab2}
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => handleTabPress(3)}
        >
          <AppText
            style={[
              styles.tabButtonText,
              activeTab === 3 && styles.activeTabButtonText,
            ]}
          >
            {tab3}
          </AppText>
        </TouchableOpacity>
      </RowContainer>
      {/* Text Display */}
      <View style={styles.textContainer}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <AppText>
            {activeTab === 1 ? content1 : activeTab === 2 ? content2 : content3}
          </AppText>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activeTabButtonText: {
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  tabButton: {
    paddingVertical: 10,
  },
  tabButtonText: {
    fontSize: 15,
    fontWeight: "600",
  },
  textContainer: {
    flex: 1,
  },
});

export default TabbedInterface;
