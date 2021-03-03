import React from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.corners,
  },
});

const Button = ({ children, color, style, ...props }) => {
  const buttonStyle = [styles.container, style, color === 'warning' && { backgroundColor: theme.colors.error }];

  return (
    <TouchableWithoutFeedback {...props}>
      <View style={buttonStyle}>
        <Text color="white" fontWeight="bold">{children}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;