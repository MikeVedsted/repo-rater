import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { View, Text, FlatList } from 'react-native';

import ReviewItem from '../ReviewItem';
import { CHECK_AUTH } from '../../graphql/queries';

const MyReviews = () => {
  const { data, loading } = useQuery(CHECK_AUTH, { variables: { includeReviews: true } });
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!loading && data) {
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
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        keyExtractor={({ node }) => node.id}
      />
    </View>
  );
};

export default MyReviews;
