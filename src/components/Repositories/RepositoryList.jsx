import React from 'react';
import { useHistory } from 'react-router-native';
import { FlatList, View, TouchableWithoutFeedback } from 'react-native';

import RepositoryItem from "../RepositoryItem";

const RepositoryListContainer = ({ repositories, header, onEnd }) => {
  const history = useHistory();
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const RenderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => history.push(`/repository/${item.id}`)} >
        <View>
          <RepositoryItem item={item} />
        </View>
      </TouchableWithoutFeedback >
    );
  };

  const onEndReach = () => {
    onEnd();
  };

  return (
    <FlatList
      data={repositoryNodes}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item }) => <RenderItem item={item} />}
      keyExtractor={item => item.id}
      testID='RepositoryListContainer'
      ListHeaderComponent={header}
    />
  );
};

export default RepositoryListContainer;