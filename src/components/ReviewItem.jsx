import React from 'react';
import { Alert, View, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import Text from './Text';
import Button from './Button';
import theme from '../theme';

const styles = StyleSheet.create({
  container: { backgroundColor: theme.colors.white, padding: 20 },
  row: { flexDirection: "row", },
  circle: { borderColor: theme.colors.primary, height: 50, width: 50, borderWidth: 2, borderRadius: 25, alignItems: "center", justifyContent: "center" },
  text: { marginLeft: 20, flex: 1 }
});

const ReviewItem = ({ review, owner }) => {
  const { createdAt, rating, text, user } = review.node;
  const { fullName = '', url = '' } = review.node.repository;
  const date = new Date(createdAt);
  const dateString = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
  
  const handleDeleteRequer = () => {
    console.log('should delete')
  };

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed")
        }
      ],
      { cancelable: false }
    );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.circle}>
          <Text color='primary' fontWeight='bold'>{rating}</Text>
        </View>
        <View style={styles.text}>
          <Text fontSize='subheading' fontWeight='bold' color='primary'>{owner ? fullName : user.username} </Text>
          <Text color='textSecondary'>{dateString}</Text>
          <Text color='primary' style={{ flexWrap: "wrap" }}>{text}</Text>
        </View>

      </View>
      {owner &&
        <View style={styles.row}>
          <Button onPress={() => WebBrowser.openBrowserAsync(url)} style={{ flex: 1, margin: 10 }} >View repository</Button>
          <Button
            // onPress={() => Alert.alert('You pressed the text!')}
            onPress={createTwoButtonAlert}
            style={{ flex: 1, margin: 10 }} color='warning' >Delete review</Button>
        </View>
      }
    </View>
  );
};

export default ReviewItem;
