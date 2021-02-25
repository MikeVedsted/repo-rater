import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  field: {
    borderColor: theme.colors.dim,
    borderRadius: theme.corners,
    borderWidth: 1,
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
    padding: 10,
    marginVertical: 10,
  },
  error: {
    borderColor: theme.colors.error,
    marginBottom: 0
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.field,
    error && styles.error,
    style
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
