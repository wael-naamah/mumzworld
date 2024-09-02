import { shorthands } from '@tamagui/shorthands';
import { createTamagui } from 'tamagui';
import { headingFont, bodyFont } from './src/theme/fonts';
import tokens from './src/theme/tokens';
import themes from './src/theme/themes';

const config = createTamagui({
  defaultTheme: 'light',
  shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont,
    true: bodyFont,
  },
  themes,
  tokens,
});

export type AppConfig = typeof config;

declare module 'tamagui' {
  export interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
