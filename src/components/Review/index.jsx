
import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import ReviewForm from './ReviewForm';
import * as yup from 'yup';

const initialValues = {
  owner: "",
  name: "",
  rating: "",
  review: ""
};

const validationSchema = yup.object().shape({
  owner: yup.string().required('Repository owner is required'),
  name: yup.string().required('Repository name is required'),
  rating: yup.number().min(0, 'Review must be at least 0').max(100, 'Reviews higher than 100 not allowed').required('Rating is required'),
  review: yup.string()
});


const Review = () => {

  const onSubmit = async (values) => {
    // const { username, password } = values;

    // try {
    //   const { data } = await signIn({ username, password });
    //   console.log(data);
    //   history.push('/');
    // } catch (e) {
    //   console.log(e);
    // }
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default Review;
