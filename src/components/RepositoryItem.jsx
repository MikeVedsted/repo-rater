import React, { useEffect } from 'react';
import { useParams } from 'react-router-native';
import { View, Image, StyleSheet, Text } from 'react-native';
import { useQuery } from '@apollo/react-hooks';

import ItemOverView from './ItemOverView';
import ItemDataCount from './ItemDataCount';
import theme from '../theme';
import { GET_REPOSITORY } from '../graphql/queries';

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
    borderRadius: theme.corners
  },
});

const RepositoryItem = ({ item }) => {
  const params = useParams();
  console.log(params);
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    variables: { id: params.id }
  });


  if (!item) {
    if (loading) return 'loading';
    item = data.repository;
  }

  useEffect(() => {
    console.log('DATA ----------------', data);
  }, [data]);
  // const { fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount, ownerAvatarUrl, id } = item;

  return (
    <View style={styles.container} >
      <View style={styles.row}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        <ItemOverView name={item.fullName} description={item.description} language={item.language} />
      </View>
        <View style={styles.distributedRow}>
        <ItemDataCount count={item.stargazersCount} unit='Stars' />
        <ItemDataCount count={item.forksCount} unit='Forks' />
        <ItemDataCount count={item.reviewCount} unit='Reviews' />
        <ItemDataCount count={item.ratingAverage} unit='Rating' />
        </View> 
    </View>
  );
};

export default RepositoryItem;







