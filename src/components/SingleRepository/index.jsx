import React from 'react';
import { View, FlatList } from 'react-native';
import { useParams } from 'react-router-native';

import ReviewItem from '../ReviewItem';
import RepositoryItem from '../RepositoryItem';
import useSingleRepository from '../../hooks/useSingleRepository';

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, fetchMoreReviews } = useSingleRepository({ id, first: 4 });

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
          ListHeaderComponent={() => <RepositoryItem item={repository} includeButton />}
        />}
    </View>
  );
};

export default SingleRepository;