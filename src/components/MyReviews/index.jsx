import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useQuery } from '@apollo/react-hooks';

import Loading from '../Loading';
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
      <Loading />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} owner />}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        keyExtractor={({ node }) => node.id}
      />
    </View>
  );
};

export default MyReviews;
