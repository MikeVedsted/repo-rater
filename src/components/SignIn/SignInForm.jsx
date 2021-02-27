import React from 'react';
import { View, StyleSheet } from 'react-native';

import Button from '../Button';
import FormikTextInput from '../FormikTextInput';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: { backgroundColor: theme.colors.white, padding: 20 },
});


const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput testID='usernameField' name="username" placeholder="Username" />
      <FormikTextInput testID='passwordField' name="password" placeholder="Password" secureTextEntry />
      <Button testID='submitButton' onPress={onSubmit}>
        Sign in
      </Button>
    </View>
  );
};

export default SignInForm;