import React from 'react';
import { YStack, Image, XStack, Circle } from 'tamagui';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import { Product } from '../../../types/apiTypes';
import tokens from '@/src/theme/tokens';
import { Text } from '@components';
import { Platform } from 'react-native';
import { useRouter } from 'expo-router';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();

  const discount = product.price_range?.minimum_price?.discount;
  const hasDiscount = discount && discount.amount_off > 0;
  const isYalla = product.is_yalla.includes('AE'); // TODO: get country code from context
  const productLabel = product.product_label.label_text || '';

  return (
    <YStack
      width="48%"
      mb={16}
      bg={tokens.color.semanticBgWhite}
      borderRadius={8}
      shadowColor={tokens.color.semanticBgPrimary}
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.1}
      shadowRadius={8}
      p={8}
      onPress={() => {
        router.push({
          pathname: '/home/product/[id]',
          params: { id: product.id },
        });
      }}
    >
      <Image
        source={{ uri: product.small_image.url }}
        style={{
          width: '100%',
          height: 100,
          borderRadius: 8,
          objectFit: 'contain',
        }}
      />
      <YStack
        position="absolute"
        right={8}
        top={8}
        borderRadius={8}
        bg={tokens.color.semanticBgWhite}
        p={4}
        justifyContent="center"
        alignItems="center"
        shadowColor="black"
        shadowOffset={{ width: 0, height: 1 }}
        shadowOpacity={0.15}
        shadowRadius={2}
        elevation={Platform.OS === 'android' ? 5 : 0}
      >
        <Ionicons
          name="heart-outline"
          size={20}
          color={tokens.color.semanticFgTextWeak.val}
        />
      </YStack>

      <Text mt={10} numberOfLines={2} ellipsizeMode="tail">
        {product.name}
      </Text>
      <XStack ai="center" jc={'space-between'} mt={4}>
        <YStack>
          <XStack ai="center">
            {hasDiscount && (
              <Text
                size="xs"
                color={'semanticFgTextWeak'}
                style={{ textDecorationLine: 'line-through' }}
              >
                {product.price_range?.minimum_price?.regular_price.value.toFixed(
                  2,
                )}{' '}
              </Text>
            )}
            <Text size="sm" weight="bold">
              {product.price_range?.minimum_price?.final_price.value.toFixed(2)}{' '}
            </Text>
            <Text size="xs">
              {product.price_range?.minimum_price?.final_price.currency}
            </Text>
          </XStack>
          {hasDiscount && (
            <Text size="xs" color={'feedbackBgSuccess'}>
              Save {discount.amount_off} ({discount.percent_off}%)
            </Text>
          )}
        </YStack>

        <Circle
          size={32}
          bg={tokens.color.semanticBgWhite}
          bw={1}
          borderColor={tokens.color.semanticBgPrimary}
          justifyContent="center"
          alignItems="center"
        >
          <MaterialCommunityIcons
            name="cart-plus"
            size={18}
            color={tokens.color.semanticBgPrimary.val}
          />
        </Circle>
      </XStack>

      <XStack mb={4} gap={4} mt={8}>
        {productLabel ? (
          <YStack
            bg={tokens.color.semanticBgPrimaryLight}
            borderRadius={4}
            px={4}
            py={2}
            alignSelf="flex-start"
          >
            <Text color={'semanticBgPrimary'} size="xs">
              {productLabel}
            </Text>
          </YStack>
        ) : null}
        {isYalla ? (
          <YStack
            bg={tokens.color.semanticSupportYellow}
            borderRadius={4}
            px={4}
            py={2}
            alignSelf="flex-start"
          >
            <Text color={'semanticBgSecondary'} size="xs">
              Yalla
            </Text>
          </YStack>
        ) : null}
      </XStack>
    </YStack>
  );
};

export default ProductCard;
