import React, { useContext } from 'react';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import { useQuery } from '@apollo/react-hooks';
import { useApolloClient } from '@apollo/client';
import { View, StyleSheet, ScrollView } from 'react-native';

import AppBarTab from "./AppBarTab";
import { CHECK_AUTH } from '../../graphql/queries';
import AuthStorageContext from '../../contexts/AuthStorageContext';
import theme from '../../theme';

const styles = StyleSheet.create({
  appBar: {
    padding: 10,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    flexDirection: "row"
  },
});

const AppBar = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const { data } = useQuery(CHECK_AUTH);

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.appBar}>
      <ScrollView horizontal>
        <Link to="/" component={AppBarTab}>Repositories</Link>

        {data && !data.authorizedUser &&
          <>
            <Link to="/sign-in" component={AppBarTab}>Sign in</Link>
            <Link to="/sign-up" component={AppBarTab}>Sign up</Link>
          </>
        }

        {data && data.authorizedUser &&
          <>
            <Link to="/review" component={AppBarTab}>Create a review</Link>
          <Link to="/my-reviews" component={AppBarTab}>My reviews</Link>
            <AppBarTab onPress={handleSignOut}>Sign out</AppBarTab>
          </>
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;