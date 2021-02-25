import React from "react";
import { View, StyleSheet } from "react-native";

import Text from './Text';
import Pill from './Pill';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    flex: 1
  },
});

const ItemOverView = ({ name, description, language }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight="bold" fontSize="subheading">{name}</Text>
      <Text color="textSecondary" style={{ marginVertical: 10, flexWrap: "wrap" }}>{description}</Text>
      <Pill text={language} />
    </View>

  );
};

export default ItemOverView;
