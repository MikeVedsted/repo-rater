// use Formik.
//  The form should have four fields:
// repository owner's GitHub username (for example "jaredpalmer")
// repository's name (for example "formik")
// a numeric rating, 
// and a textual review. 

// Validate the fields using Yup schema so that it contains the following validations:
// Repository owner's username is a required string
// Repository's name is a required string
// Rating is a required number between 0 and 100
// Review is a optional string



// You can make the review field expand to multiple lines by using TextInput component's multiline prop.

// You can create a review using the createReview mutation.
//  Check this mutation's arguments in the docs tab in the GraphQL playground. 
// You can use the useMutation hook to send a mutation to the Apollo Server.

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

// The review form should be accessible through the app bar. 
// Create a tab to the app bar with a label "Create a review". 
// This tab should only be visible to users who have signed in. 
// You will also need to define a route for the review form.



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
      <FormikTextInput name="owner" placeholder="Repository owner name" />
      <FormikTextInput name="name" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating (0-100)" keyboardType='numeric' />
      <FormikTextInput name="review" placeholder="Review (Optional)" multiline numberOfLines={8}
      />
      <Button onPress={onSubmit}>Create a review</Button>
    </View>
  );
};

export default ReviewForm;