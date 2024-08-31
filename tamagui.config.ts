import { shorthands } from '@tamagui/shorthands';
import { createTamagui } from 'tamagui';
import { headingFont, bodyFont } from './theme/fonts';
import tokens from './theme/tokens';
import themes from './theme/themes';

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
