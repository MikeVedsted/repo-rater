import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-native';
import { View, Image, StyleSheet } from 'react-native';
import { useLazyQuery } from '@apollo/react-hooks';
import * as WebBrowser from 'expo-web-browser';

import Loading from '../Loading';
import ItemOverView from './ItemOverView';
import ItemDataCount from './ItemDataCount';
import Button from './Button';
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
  const { id } = useParams();
  const [getRepository, { data, loading, called }] = useLazyQuery(GET_REPOSITORY, { fetchPolicy: 'no-cache' });
  const [repository, setRepository] = useState(item);

  useEffect(() => {
    if (called && !loading) {
      setRepository(data.repository);
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  if (!item) {
    if (!called) {
      getRepository({ variables: { id } });
    }
  }

  return (
    <View style={styles.container} >
      {repository && <>
        <View style={styles.row}>
          <Image style={styles.avatar} source={{ uri: repository.ownerAvatarUrl }} />
          <ItemOverView name={repository.fullName} description={repository.description} language={repository.language} />
        </View>
        <View style={styles.distributedRow}>
          <ItemDataCount count={repository.stargazersCount} unit='Stars' />
          <ItemDataCount count={repository.forksCount} unit='Forks' />
          <ItemDataCount count={repository.reviewCount} unit='Reviews' />
          <ItemDataCount count={repository.ratingAverage} unit='Rating' />
        </View>
      </>}
      { id && <Button onPress={() => WebBrowser.openBrowserAsync(repository.url)}>Open in Github</Button>}
    </View>
  );
};

export default RepositoryItem;







