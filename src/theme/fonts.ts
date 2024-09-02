import { createFont } from 'tamagui';

const headingFont = createFont({
  size: {
    '4xl': 60,
    '3xl': 40,
    '2xl': 34,
    xl: 24,
    lg: 20,
  },
  lineHeight: {
    '4xl': 72,
    '3xl': 50,
    '2xl': 40,
    xl: 32,
    lg: 28,
  },
  weight: {
    '4xl': '700',
    '3xl': '700',
    '2xl': '700',
    xl: '700',
    lg: '700',
  },
  letterSpacing: {
    '4xl': -1,
    '3xl': -0.5,
    '2xl': -0.25,
    xl: 0,
    lg: 0,
  },
});

const bodyFont = createFont({
  size: {
    lg: 22,
    md: 14,
    sm: 12,
    xs: 10,
    base: 16,
  },
  lineHeight: {
    lg: 28,
    md: 22,
    sm: 18,
    xs: 14,
    base: 22,
  },
  weight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  letterSpacing: {
    lg: 0,
    md: 0,
    sm: 0,
    xs: 0.5,
    base: 0.5,
  },
});

export { headingFont, bodyFont };
