import React from 'react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-native';
import { Alert, View, StyleSheet } from 'react-native';

import Text from '../Text';
import Button from '../Button';
import { CHECK_AUTH } from '../../graphql/queries';
import { DELETE_REVIEW } from '../../graphql/mutations';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: { backgroundColor: theme.colors.white, padding: 20 },
  row: { flexDirection: "row", },
  circle: { borderColor: theme.colors.primary, height: 50, width: 50, borderWidth: 2, borderRadius: 25, alignItems: "center", justifyContent: "center" },
  text: { marginLeft: 20, flex: 1 },
  ownerButton: { flex: 1, margin: 10 }
});

const ReviewItem = ({ review, owner }) => {
  const history = useHistory();
  const { createdAt, rating, text, user, id } = review.node;
  const date = new Date(createdAt);
  const dateString = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
  const [mutate] = useMutation(DELETE_REVIEW, {
    variables: { id },
    refetchQueries: [
      { query: CHECK_AUTH, variables: { includeReviews: true } }
    ],
    awaitRefetchQueries: true
  });

  const deletionAlert = () =>
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        { text: "Cancel" },
        {
          text: "DELETE",
          onPress: () => handleDelete()
        }
      ],
      { cancelable: false }
    );

  const handleDelete = async () => {
    await mutate();
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.circle}>
          <Text color='primary' fontWeight='bold'>{rating}</Text>
        </View>
        <View style={styles.text}>
          <Text fontSize='subheading' fontWeight='bold' color='primary'>{owner ? review.node.repository.fullName : user.username} </Text>
          <Text color='textSecondary'>{dateString}</Text>
          <Text color='primary' wrap >{text}</Text>
        </View>

      </View>
      {owner &&
        <View style={styles.row}>
          <Button onPress={() => history.push(`/repository/${review.node.repository.id}`)} style={styles.ownerButton} >View repository</Button>
          <Button onPress={deletionAlert} style={styles.ownerButton} color='warning' >Delete review</Button>
        </View>
      }
    </View>
  );
};

export default ReviewItem;
