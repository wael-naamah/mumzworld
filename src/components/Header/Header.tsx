import React from 'react';
import { YStack, XStack, Button } from 'tamagui';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import tokens from '@/src/theme/tokens';
import { toggleLanguage } from '@/src/locales/i18n';
import { RootState } from '@/src/store/store';
import { useSelector } from 'react-redux';

const Header = () => {
  const currentLanguage = useSelector((state: RootState) => state.localesSlice.currentLang);

  return (
    <XStack
      jc="space-between"
      ai="center"
      py={8}
      bg={tokens.color.semanticBgWhite}
      bbw={1}
      bbc={tokens.color.semanticFgTextDisabled}
    >
      <Button
        icon={() => (
          <Ionicons
            name="menu"
            size={24}
            color={tokens.color.semanticFgText.val}
          />
        )}
        backgroundColor="transparent"
        onPress={() => {
          // Handle menu click
        }}
      />

      <YStack flex={1} alignItems="center">
        <Image
          source={require('@/assets/images/logo.png')}
          style={{ width: 120, height: 40 }}
          resizeMode="contain"
        />
      </YStack>

      <XStack ai="center" jc="flex-end" gap={5}>
        {/* TODO: to be moved to settings page */}
        <Button padding={0} onPress={toggleLanguage}>
          { currentLanguage === 'en' ? 'عربي' : 'English'}
        </Button>
        <Button
          icon={() => (
            <Ionicons
              name="search"
              size={24}
              color={tokens.color.semanticFgText.val}
            />
          )}
          backgroundColor="transparent"
          padding={0}
          onPress={() => {
            // Handle search click
          }}
        />
        <Button
          icon={() => (
            <Ionicons
              name="cart"
              size={24}
              color={tokens.color.semanticFgText.val}
            />
          )}
          backgroundColor="transparent"
          padding={8}
          onPress={() => {
            // Handle cart click
          }}
        />
      </XStack>
    </XStack>
  );
};

export default Header;
