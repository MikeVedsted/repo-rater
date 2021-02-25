import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import ItemDataCount from './ItemDataCount';
import ItemOverView from './ItemOverView';
import theme from '../theme';

const RepositoryItem = ({ item }) => {
  const { fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount, ownerAvatarUrl } = item;
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: theme.colors.white
    },
    row: {
      flexDirection: "row",
    },
    distributedRow: {
      flexDirection: "row",
      justifyContent: "space-evenly"
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 5
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }} />
        <ItemOverView name={fullName} description={description} language={language} />
      </View>
      <View style={styles.distributedRow}>
        <ItemDataCount count={stargazersCount} unit='Stars' />
        <ItemDataCount count={forksCount} unit='Forks' />
        <ItemDataCount count={reviewCount} unit='Reviews' />
        <ItemDataCount count={ratingAverage} unit='Rating' />
      </View>
    </View>
  );
};

export default RepositoryItem;







