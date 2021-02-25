import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from "./AppBarTab";
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  appBar: {
    padding: 10,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    flexDirection: "row"
  },
});

const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <ScrollView horizontal>
        <Link to="/" component={AppBarTab}>Repositories</Link>
        <Link to="/sign-in" component={AppBarTab}>Sign in</Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;