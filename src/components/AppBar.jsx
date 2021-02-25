import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from "./AppBarTab";
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  appBar: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    paddingBottom: 10,
    flexDirection: "row"
  },
  tab: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    paddingLeft: 20
  }
});

const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <ScrollView horizontal>
        <Link to='/' >
          {/* <Text style={styles.tab}>Repositories</Text> */}
          <AppBarTab text="Sign in" />
        </Link>

        <Link to='/signin'>
          <Text style={styles.tab}>Sign in</Text>
        </Link>

      </ScrollView>

      {/* */}
      {/* <AppBarTab text="Repositories" /> */}
    </View>
  );
};

export default AppBar;