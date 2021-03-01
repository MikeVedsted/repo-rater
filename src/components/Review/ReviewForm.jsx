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