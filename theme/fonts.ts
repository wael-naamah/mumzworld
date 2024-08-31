import { createFont } from 'tamagui';

const headingFont = createFont({
  family: 'BebasNeue',
  size: {
    '4xl': 60,
    '3xl': 40,
    '2xl': 34,
    'xl': 24,
    'lg': 20,
  },
  lineHeight: {
    '4xl': 1,
    '3xl': 1,
    '2xl': 1.06,
    'xl': 1.12,
    'lg': 1.12,
  },
  weight: {
    '4xl': '700',
    '3xl': '700',
    '2xl': '700',
    'xl': '700',
    'lg': '700',
  },
  letterSpacing: {
    '4xl': -1,
    '3xl': -0.5,
    '2xl': -0.25,
    'xl': 0,
    'lg': 0,
  },
});

const bodyFont = createFont({
  family: 'Montserrat',
  size: {
    'lg': 22,
    'md': 18,
    'sm': 14,
    'xs': 12,
    'base': 16,
  },
  lineHeight: {
    'lg': 1.26,
    'md': 1.3,
    'sm': 1.4,
    'xs': 1,
    'base': 1.25,
  },
  weight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  letterSpacing: {
    'lg': 0,
    'md': 0,
    'sm': 0,
    'xs': 0.5,
    'base': 0.5,
  },
  face: {
    400: { normal: 'Montserrat-Regular' },
    500: { normal: 'Montserrat-Medium' },
    600: { normal: 'Montserrat-SemiBold' },
    700: { normal: 'Montserrat-Bold' },
  },
});

export { headingFont, bodyFont };
