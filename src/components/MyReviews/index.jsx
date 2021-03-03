import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useQuery } from '@apollo/react-hooks';

import ReviewItem from '../ReviewItem';
import { CHECK_AUTH } from '../../graphql/queries';

const dummy = [{ node: { id: 'aasdasd', createdAt: 123, user: { username: 'mike' }, rating: 10, text: 'asdasdasdasdasdasdasdasd' } }, { node: { id: 'aasdasdasd26', createdAt: 123, user: { username: 'mike' }, rating: 10, text: 'asdasdasdasdasdasdasdasd' } }, { node: { id: 'aasd2sda964815sd', createdAt: 123, user: { username: 'mike' }, rating: 10, text: 'asdasdasdasdasdasdasdasd' } }, { node: { id: 'a861sdasd', createdAt: 123, user: { username: 'mike' }, rating: 10, text: 'asdasdasdasdasdasdasdasd' } }];

const MyReviews = () => {
  const { data, error, loading, refetch } = useQuery(CHECK_AUTH, { variables: { includeReviews: true } });
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      console.log(data.authorizedUser.reviews.edges);
      setReviews(data.authorizedUser.reviews.edges);
    }
  }, [data]);

  if (loading) {
    return (
      <View><Text>Loading...</Text></View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        // data={repository.reviews.edges}
        data={reviews}
        // onEndReached={onEndReach}
        // onEndReachedThreshold={0.5}
        renderItem={({ item }) => <ReviewItem review={item} />}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        keyExtractor={({ node }) => node.id}
      // ListHeaderComponent={() => <RepositoryInfo data={repository} />}
      />
    </View>
  );
};

export default MyReviews;
