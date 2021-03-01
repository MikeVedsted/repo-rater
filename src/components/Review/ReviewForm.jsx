
// After a successful createReview mutation, redirect the user to the repository's view 
// you implemented in the previous exercise. This can be done with the history.push method after 
// you have obtained the history object using the useHistory hook. 
// The created review has a repositoryId field which you can use to construct the route's path.

// To prevent getting cached data with the repository query in the single repository view, 
// use the cache-and-network fetch policy in the query. It can be used with the useQuery hook like this:

// useQuery(GET_REPOSITORY, {
//   fetchPolicy: 'cache-and-network',
//   // Other options
// });

// Note that only an existing public GitHub repository can be reviewed and a user can review the same repository only once.
//  You don't have to handle these error cases, but the error payload includes specific codes and messages for these errors.
//  You can try out your implementation by reviewing one of your own public repositories or any other public repository.


import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../Button';
import FormikTextInput from '../FormikTextInput';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: { backgroundColor: theme.colors.white, padding: 20 },
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="repositoryName" placeholder="Repository owner name" />
      <FormikTextInput name="ownerName" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating (0-100)" keyboardType='numeric' />
      <FormikTextInput name="text" placeholder="Review (Optional)" multiline numberOfLines={8} />
      <Button onPress={onSubmit}>Create a review</Button>
    </View>
  );
};

export default ReviewForm;