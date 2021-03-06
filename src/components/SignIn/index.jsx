import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { View, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';

import Button from '../Button';
import useSignIn from '../../hooks/useSignIn';
import FormikTextInput from '../FormikTextInput';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: { backgroundColor: theme.colors.white, padding: 20 },
});

const initialValues = {
  username: "",
  password: ""
};

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

const validationSchema = yup.object().shape({
  username: yup.string()
    .required('Password is required'),
  password: yup.string()
    .required('Password is required')
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;