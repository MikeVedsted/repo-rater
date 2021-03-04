import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AddReview from './AddReview';
import MyReviews from './MyReviews';
import SingleRepository from './SingleRepository';
import Repositories from './Repositories';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.dim,
    flex: 1
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/review" exact component={AddReview} />
        <Route path="/my-reviews" exact component={MyReviews} />
        <Route path="/repository/:id" exact component={SingleRepository} />
        <Route path="/" exact component={Repositories} />
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;

