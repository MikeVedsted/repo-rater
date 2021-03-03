import React from 'react';
import { useParams } from 'react-router-native';
import { View, Image, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import ItemOverView from './ItemOverView';
import ItemDataCount from './ItemDataCount';
import ReviewItem from '../ReviewItem';
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


const RepositoryItem = ({ item }) => {


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
    </View>
    );
  };

  return (
    <View>
      <RepositoryInfo data={item} />
    </View>
  );
};

export default RepositoryItem;