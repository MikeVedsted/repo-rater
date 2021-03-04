import React, { useContext } from 'react';
import { useApolloClient } from '@apollo/client';
import { useHistory } from 'react-router-native';
import AuthStorageContext from '../../contexts/AuthStorageContext';

import AppBarTab from './AppBarTab';

const Logout = () => {
  const history = useHistory();
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const handleLogOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push('/');
  };

  return <AppBarTab onPress={handleLogOut}>Sign out</AppBarTab>;
};

export default Logout;
