import React from 'react';
import { useParams } from 'react-router-native';
import { View, Image, FlatList, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import ItemOverView from './ItemOverView';
import ItemDataCount from './ItemDataCount';
import ReviewItem from './ReviewItem';
import Button from '../Button';
import theme from '../../theme';
import useSingleRepository from '../../hooks/useSingleRepository';

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


const RepositoryItem = () => {
  const { id } = useParams();
  const { repository, fetchMoreReviews } = useSingleRepository({ id, first: 2 });


  const RepositoryInfo = ({ data }) => {
    return (
      <View style={styles.container} >
        {data && <>
          <View style={styles.row}>
            <Image style={styles.avatar} source={{ uri: data.ownerAvatarUrl }} />
            <ItemOverView name={data.fullName} description={data.description} language={data.language} />
          </View>
          <View style={styles.distributedRow}>
            <ItemDataCount count={data.stargazersCount} unit='Stars' />
            <ItemDataCount count={data.forksCount} unit='Forks' />
            <ItemDataCount count={data.reviewCount} unit='Reviews' />
            <ItemDataCount count={data.ratingAverage} unit='Rating' />
          </View>
        </>}
        { id && <Button onPress={() => WebBrowser.openBrowserAsync(data.url)}>Open in Github</Button>}
      </View>
    );
  };

  const onEndReach = () => {
    fetchMoreReviews();
  };

  return (
    <View style={{ flex: 1 }}>
      {id && repository && repository.reviews &&
        <FlatList
          data={repository.reviews.edges}
          onEndReached={onEndReach}
          onEndReachedThreshold={0.5}
          renderItem={({ item }) => <ReviewItem review={item} />}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          keyExtractor={({ node }) => node.id}
          ListHeaderComponent={() => <RepositoryInfo data={repository} />}
        />}
    </View>
  );
};

export default RepositoryItem;