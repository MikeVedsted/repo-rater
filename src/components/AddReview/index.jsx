
import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-native';

import ReviewForm from './ReviewForm';
import { CREATE_REVIEW } from '../../graphql/mutations';

const initialValues = {
  repositoryName: "",
  ownerName: "",
  rating: "",
  text: ""
};

const validationSchema = yup.object().shape({
  repositoryName: yup.string()
    .required('Repository name is required'),
  ownerName: yup.string()
    .required('Repository owner is required'),
  rating: yup.number()
    .min(0, 'Review must be at least 0')
    .max(100, 'Reviews higher than 100 not allowed')
    .required('Rating is required'),
  text: yup.string()
});


const Review = () => {
  const history = useHistory();
  const [mutate] = useMutation(CREATE_REVIEW);

  const onSubmit = async (values) => {
    const { repositoryName, ownerName, text } = values;
    const rating = Number(values.rating);

    try {
      const { data } = await mutate({ variables: { repositoryName, ownerName, rating, text } });
      history.push(`/repository/${data.createReview.repository.id}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default Review;
