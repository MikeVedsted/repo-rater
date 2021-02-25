import React from 'react';
import { Formik } from 'formik';
import { View, StyleSheet } from 'react-native';
import * as yup from 'yup';

import Button from './Button';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';

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
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Button onPress={onSubmit}>
        Sign in
      </Button>
    </View>
  );
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Password is required'),
  password: yup.string().required('Password is required')

});

const SignIn = () => {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;

