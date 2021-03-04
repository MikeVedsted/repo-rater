import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { View, Image, StyleSheet } from 'react-native';

import Button from '../Button';
import ItemOverView from './ItemOverView';
import ItemDataCount from './ItemDataCount';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: theme.colors.white },
  row: { flexDirection: "row", },
  distributedRow: { flexDirection: "row", justifyContent: "space-evenly" },
  avatar: { width: 50, height: 50, borderRadius: theme.corners },
});

const RepositoryItem = ({ item, includeButton }) => {
  return (
    <View style={styles.container} >
      {item && <>
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
        { includeButton && <Button onPress={() => WebBrowser.openBrowserAsync(item.url)}>Open in Github</Button>}
      </>}
    </View>
  );
};

export default RepositoryItem;