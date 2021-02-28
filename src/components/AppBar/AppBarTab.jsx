import React from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  tabContainer: {
    padding: 10,
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppBarTab = ({ children, ...props }) => {
  return (
    <TouchableWithoutFeedback {...props}>
      <View style={styles.tabContainer}>
        <Text color='white' fontSize='subheading' fontWeight='bold'>
          {children}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;
