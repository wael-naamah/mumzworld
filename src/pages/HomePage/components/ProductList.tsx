import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { YStack } from 'tamagui';
import ProductCard from './ProductCard';
import { Product } from '../../../types/apiTypes';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <ProductCard product={item} />
  );

  return (
    <YStack flex={1} px={8} pt={10} w="100%">
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.uid}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 16, justifyContent: 'center' }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={21}
        removeClippedSubviews={true}
      />
    </YStack>
  );
};

export default ProductList;
