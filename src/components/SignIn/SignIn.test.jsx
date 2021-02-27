import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';

import SignIn from './index';
import SignInForm from './SignInForm';

describe('SignIn', () => {
  it('calls onSubmit after pressing submit', async () => {
    const onSubmit = jest.fn();
    const { debug, getByTestId } = render(<SignIn />);

    // await act(async () => {
    //   fireEvent.changeText(getByTestId('usernameField'), 'Mike');
    // });

    // await act(async () => {
    //   fireEvent.changeText(getByTestId('passwordField'), 'password');
    // });

    // await act(async () => {
    //   fireEvent.press(getByTestId('submitButton'));
    // });

    debug();

    // await waitFor(() => {
    // expect(onSubmit).toHaveBeenCalledTimes(1);
    // });

  });
});