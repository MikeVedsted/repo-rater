import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  field: {
    borderColor: theme.colors.dim,
    borderRadius: 5,
    borderWidth: 1,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
    padding: 10,
    marginVertical: 10,
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.field, style, error && { borderColor: theme.colors.error, marginBottom: 0 }];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
