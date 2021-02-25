import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#316925',
    textSecondary: '#7b9e5d',
    primary: '#3a591f',
    white: '#f5f3f0',
    dim: '#e1e4e8',
    error: '#db4b4b'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;
