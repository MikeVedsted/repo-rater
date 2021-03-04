import React from 'react';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import { useQuery } from '@apollo/react-hooks';
import { View, StyleSheet, ScrollView } from 'react-native';

import Logout from "./Logout";
import AppBarTab from "./AppBarTab";
import { CHECK_AUTH } from '../../graphql/queries';
import theme from '../../theme';

const styles = StyleSheet.create({
  appBar: {
    padding: 10,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    flexDirection: "row"
  },
});

const AuthorizedItems = () => {
  return (
    <>
      <Link to="/review" component={AppBarTab}>Create a review</Link>
      <Link to="/my-reviews" component={AppBarTab}>My reviews</Link>
      <Logout />
    </>
  );
};

const UnauthorizedItems = () => {
  return (
    <>
      <Link to="/sign-in" component={AppBarTab}>Sign in</Link>
      <Link to="/sign-up" component={AppBarTab}>Sign up</Link>
    </>
  );
};

const AppBar = () => {
  const { data } = useQuery(CHECK_AUTH);

  return (
    <View style={styles.appBar}>
      <ScrollView horizontal>
        <Link to="/" component={AppBarTab}>Repositories</Link>
        {data && !data.authorizedUser && <UnauthorizedItems />}
        {data && data.authorizedUser && <AuthorizedItems />}
      </ScrollView>
    </View>
  );
};

export default AppBar;