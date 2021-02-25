import React from 'react';
import { Formik } from 'formik';
import { View, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import theme from '../theme';

const styles = StyleSheet.create({
  container: { backgroundColor: theme.colors.white },
  form: {
    padding: 20
  },
  submit: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 5,
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
    textAlign: "center",
    marginVertical: 10
  }
});
const initialValues = {
  username: "",
  password: ""
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <View>
          <Text style={styles.submit}>Sign in</Text>
        </View>
      </TouchableWithoutFeedback>
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
    // const mass = parseFloat(values.mass);
    // const height = parseFloat(values.height);

    // if (!isNaN(mass) && !isNaN(height) && height !== 0) {
    //   console.log(`Your body mass index is: ${getBodyMassIndex(mass, height)}`);
    // }

  };

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;

