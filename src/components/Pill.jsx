import React from "react";
import { View, Text, StyleSheet } from "react-native";

import theme from '../theme';

const styles = StyleSheet.create({
  pill: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: theme.corners,
    alignSelf: "flex-start",
  },
  text: {
    color: theme.colors.white,
  }
});

const Pill = ({ text }) => {

  return (
    <View style={styles.pill} >
      <Text testID='repositoryLanguage' style={styles.text} >{text}</Text>
    </View>
  );
};

export default Pill;