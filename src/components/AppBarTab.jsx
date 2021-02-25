import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import Text from './Text';

const AppBarTab = ({ text }) => {
  return (
    // <TouchableWithoutFeedback>
    <Text color='white' fontSize='subheading' fontWeight='bold' style={{ marginBottom: 10 }}>{text}</Text>
    // </TouchableWithoutFeedback>
  );
};

export default AppBarTab;