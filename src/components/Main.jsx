import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import AppBar from './AppBar';
import SignIn from './SignIn';
import Review from './Review';
import RepositoryList from './RepositoryList';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.dim
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/review" exact component={Review} />
        <Route path="/repository/:id" exact component={RepositoryItem} />
        <Route path="/" exact component={RepositoryList} />
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;

