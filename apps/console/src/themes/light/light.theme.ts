import { createTheme } from '@mantine/core';

const theme = {
  primaryColor: 'bright-pink',
  colors: {
    'bright-pink': [
      '#FFE0EE',
      '#ED9BCF',
      '#EC7CC3',
      '#ED5DB8',
      '#FF006F',
      '#F71FA7',
      '#FF00A1',
      '#E00890',
      '#C50E82',
      '#AD1374',
    ],
  },
};

export const lightTheme = createTheme(theme);
