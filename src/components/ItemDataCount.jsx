import React from "react";
import { View, StyleSheet } from "react-native";
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 20,
    alignItems: "center"
  }
});

const ItemDataCount = ({ count, unit }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight="bold" fontSize="subheading" >{count > 1000 ? `${((count / 1000).toFixed(1))}k` : count}</Text>
      <Text fontSize="subheading" color='textSecondary'>{unit}</Text>
    </View>
  );
};

export default ItemDataCount;
