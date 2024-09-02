import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Animated, StatusBar, useColorScheme, View } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {
  ErrorBoundary as ExpoDefaultErrorScreen,
  Stack,
  SplashScreen,
  Slot,
} from 'expo-router';
import { useAssets, Asset } from 'expo-asset';
import { TamaguiProvider } from 'tamagui';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import splashImage from '@assets/images/splash.png';
import { ErrorBoundary, Header } from '@components';
import config from '../tamagui.config';
import tokens from '@/theme/tokens';
import { store } from '@store';
import { I18nextProvider } from 'react-i18next';
import i18n, { getCurrentLanguage, setInitialLanguage } from '../src/locales/i18n';
import {setCurrentLanguage} from '@/src/store/slices/localesSlice';

SplashScreen.preventAutoHideAsync();

const AnimatedAppLoader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSplashReady, setSplashReady] = useState(false);
  const [assets, error] = useAssets([splashImage]);

  useEffect(() => {
    if (assets || error) {
      setSplashReady(true);
    }
  }, [assets, error]);

  if (!isSplashReady) {
    return <Slot />;
  }

  return (
    <AnimatedSplashScreen image={assets?.[0]}>{children}</AnimatedSplashScreen>
  );
};

const AnimatedSplashScreen: React.FC<{
  children: React.ReactNode;
  image: Asset | undefined;
}> = ({ children, image }) => {
  const animation = useMemo(() => new Animated.Value(1), []);
  const [isAppReady, setAppReady] = useState(false);

  const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true));
    }
  }, [isAppReady]);

  const onImageLoaded = useCallback(async () => {
    try {
      SplashScreen.hideAsync();
    } catch (e) {
    } finally {
      setAppReady(true);
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={{
            backgroundColor: tokens.color.semanticBgWhite.val,
            opacity: animation,
          }}
        >
          {image ? (
            <Animated.Image
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
                transform: [
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-100, 0],
                    }),
                  },
                ],
              }}
              source={splashImage}
              onLoadEnd={onImageLoaded}
              fadeDuration={0}
            />
          ) : null}
        </Animated.View>
      )}
    </View>
  );
};

function App() {
  let initialRouteName = 'home';
  const colorScheme = useColorScheme();

  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;
  const defaultTamaguiTheme = colorScheme === 'dark' ? 'dark' : 'light';
  const dispatch = useDispatch();

  useEffect(() => {
    const inintLanguage = async () => {
      const lang = await getCurrentLanguage();
      dispatch(setCurrentLanguage(lang));
      setInitialLanguage();
    };
    inintLanguage();
  }, []);

  return (
    <TamaguiProvider config={config} defaultTheme={defaultTamaguiTheme}>
      <ThemeProvider value={theme}>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
            <StatusBar
              animated
              barStyle="dark-content"
              backgroundColor={tokens.color.semanticBgWhite.val}
            />
            <View style={{ flex: 1 }}>
              <Header />
              <Stack
                initialRouteName={initialRouteName}
                screenOptions={{ headerShown: false }}
              />
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </ThemeProvider>
    </TamaguiProvider>
  );
}

const AppWithErrorBoundary = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <AnimatedAppLoader>
        <ErrorBoundary catch={ExpoDefaultErrorScreen}>
          <Provider store={store}>
            <App />
          </Provider>
        </ErrorBoundary>
      </AnimatedAppLoader>
    </I18nextProvider>
  );
};

export default AppWithErrorBoundary;
