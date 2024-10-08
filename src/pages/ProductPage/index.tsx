import { Text, Carousel } from '@components';
import React, { useEffect, useMemo } from 'react';
import { Image, ScrollView } from 'react-native';
import { Product } from '../../types/apiTypes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '@/src/store/network';
import { RootState } from '@/src/store/store';
import { Spinner, YStack } from 'tamagui';
import { useTranslation } from 'react-i18next';

interface ProductDetailsProps {
  productId?: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ productId }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const productDetails = useSelector((state: RootState) => state.productSlice);
  const { data, status, error } = productDetails;
  const currentLanguage = useSelector(
    (state: RootState) => state.localesSlice.currentLang,
  );

  useEffect(() => {
    if (productId) {
      dispatch(fetchProduct(productId) as any);
    }
  }, [dispatch, productId]);

  const isRtL = useMemo(() => currentLanguage === 'ar', [currentLanguage]);

  if (status === 'loading') {
    return <Spinner />;
  }

  if (status === 'failed') {
    return <Text>Error: {error}</Text>;
  }

  if (!data) {
    return <Text>No data found</Text>;
  }

  const product: Product = data?.data?.product[isRtL ? 0 : 1];

  const { name, brand_info, media_gallery, price_range, features, dimensions } =
    product;

  return (
    <ScrollView style={{ padding: 16 }}>
      <Carousel data={media_gallery} />

      <Text variant="heading" size="lg" weight="bold">
        {name}
      </Text>

      <Image
        source={{ uri: brand_info.img_src }}
        style={{
          width: 50,
          height: 50,
          objectFit: 'contain',
        }}
      />

      <Text size="md" weight="bold" color="feedbackBgSuccess">
        {price_range.minimum_price.final_price.value.toFixed(2)}{' '}
        {price_range.minimum_price.final_price.currency}
      </Text>

      <Text mt={16} size="md" weight="bold">
        {t('features')}:
      </Text>
      <Text size="md">{features}</Text>

      <Text mt={16} size="md" weight="bold">
        {t('dimensions')}:
      </Text>
      <Text>{dimensions}</Text>
      <YStack h={20} />
    </ScrollView>
  );
};

export default ProductDetails;
