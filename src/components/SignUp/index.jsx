import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-native';

import SignUpForm from './SignUpForm';
import useSignIn from '../../hooks/useSignIn';
import { SIGN_UP } from '../../graphql/mutations';

const initialValues = {
  username: "",
  password: "",
  passwordConfirm: ""
};

const validationSchema = yup.object().shape({
  username: yup.string()
    .min(1, 'Username must be at least 1 character')
    .max(30, 'Maximum length of username is 30 characters')
    .required('Username is required'),
  password: yup.string()
    .min(5, 'Password must be at least 5 character')
    .max(50, 'Maximum length of password is 50 characters')
    .required('Password is required'),
  passwordConfirm: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
    .required('Password confirm is required')
});

const SignUp = () => {
  const history = useHistory();
  const [signIn] = useSignIn();
  const [mutate] = useMutation(SIGN_UP);

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await mutate({ variables: { username, password } });
      await signIn({ username, password });
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUp;
