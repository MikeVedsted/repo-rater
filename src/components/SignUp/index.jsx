import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';

import useSignIn from '../../hooks/useSignIn';
import { useMutation, useApolloClient } from '@apollo/client';
import { SIGN_UP } from '../../graphql/mutations';

import theme from '../../theme';

import SignUpForm from './SignUpForm';

const initialValues = {
  username: "",
  password: "",
  passwordConfirm: ""
};


const validationSchema = yup.object().shape({
  username: yup.string().min(1, 'Username must be at least 1 character').max(30, 'Maximum length of username is 30 characters').required('Username is required'),
  password: yup.string().min(5, 'Password must be at least 5 character').max(50, 'Maximum length of password is 50 characters').required('Password is required'),
  passwordConfirm: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
    .required('Password confirm is required')
});

const SignUp = () => {
  const history = useHistory();
  const [signIn] = useSignIn();
  const [mutate] = useMutation(SIGN_UP);

  const onSubmit = async (values) => {
    console.log(values);
    const { username, password } = values;

    try {
      const { data } = await mutate({ variables: { username, password } });
      console.log(data);
      const signinres = await signIn({ username, password });
      console.log('sign in', signinres.data);
      history.push('/');

    //   const { data } = await signIn({ username, password });
    //   console.log(data);
    //   history.push('/');
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
