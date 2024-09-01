import React, { useEffect, useState } from 'react';
import { YStack, XStack, Button } from 'tamagui';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import tokens from '@/theme/tokens';
import { useTranslation } from 'react-i18next';
import { switchLanguage } from '@/src/locales/i18n';

const Header = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  const handleLanguageSwitch = () => {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    switchLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

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
        <Button padding={0} onPress={handleLanguageSwitch}>
          {currentLanguage === 'en' ? 'عربي' : 'English'}
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
