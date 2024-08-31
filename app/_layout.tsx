import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { StatusBar, useColorScheme } from 'react-native';
import { TamaguiProvider } from 'tamagui';

import React from 'react';
import config from '../tamagui.config';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';

function App() {
  let initialRouteName = 'home';
  const colorScheme = useColorScheme();

  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;
  const defaultTamaguiTheme = colorScheme === 'dark' ? 'dark' : 'light';

  return (
    <TamaguiProvider config={config} defaultTheme={defaultTamaguiTheme}>
      <ThemeProvider value={theme}>
        <SafeAreaProvider>
          <StatusBar animated barStyle="dark-content" />
          <Stack
            initialRouteName={initialRouteName}
            screenOptions={{ headerShown: false }}
          />
        </SafeAreaProvider>
      </ThemeProvider>
    </TamaguiProvider>
  );
}

export default App;
