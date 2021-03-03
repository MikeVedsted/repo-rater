import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: { backgroundColor: theme.colors.white, padding: 20 },
  row: { flexDirection: "row" },
  circle: { borderColor: theme.colors.primary, height: 50, width: 50, borderWidth: 2, borderRadius: 25, alignItems: "center", justifyContent: "center" },
  text: { marginLeft: 20, flex: 1 }
});

const ReviewItem = ({ review }) => {
  const { createdAt, rating, text, user } = review.node;
  const date = new Date(createdAt);
  const dateString = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.circle}>
          <Text color='primary' fontWeight='bold'>{rating}</Text>
        </View>
        <View style={styles.text}>
          <Text fontSize='subheading' fontWeight='bold' color='primary'>{user.username} </Text>
          <Text color='textSecondary'>{dateString}</Text>
          <Text color='primary' style={{ flexWrap: "wrap" }}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;
