import React from 'react';
import { Formik } from 'formik';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';

import SignInForm from './SignInForm';

describe('SignIn', () => {
  it('calls onSubmit after pressing submit', async () => {
    const onSubmit = jest.fn();
    const { getByTestId, getByPlaceholderText } = render(
      <Formik initialValues={{ username: '', password: '' }} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    );

    await act(async () => {
      fireEvent.changeText(getByPlaceholderText('Username'), 'Mike');
    });

    await act(async () => {
      fireEvent.changeText(getByPlaceholderText('Password'), 'password');
    });

    await act(async () => {
      fireEvent.press(getByTestId('submitButton'));
    });

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit.mock.calls[0][0]).toEqual({ username: "Mike", password: "password" });
    });
   
  });
});