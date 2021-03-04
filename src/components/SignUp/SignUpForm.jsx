import React from 'react';
import { View, StyleSheet } from 'react-native';

import Button from '../Button';
import FormikTextInput from '../FormikTextInput';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: { backgroundColor: theme.colors.white, padding: 20 },
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <FormikTextInput name="passwordConfirm" placeholder="Confirm password" secureTextEntry />
      <Button onPress={onSubmit}>Sign up</Button>
    </View>
  );
};

export default SignUpForm;