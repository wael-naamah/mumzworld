import {shorthands} from '@tamagui/shorthands';
import {createTamagui} from 'tamagui';
import {headingFont, bodyFont} from './theme/fonts';
import tokens from './theme/tokens';

const config = createTamagui({
  defaultTheme: 'dark',
  shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont,
    true: bodyFont,
  },
  tokens,
});

export type AppConfig = typeof config;

declare module 'tamagui' {
  export interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
