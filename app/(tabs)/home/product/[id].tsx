import { useLocalSearchParams } from 'expo-router';
import ProductPage from '@pages/ProductPage';

const ProductScreen = () => {
  const { id } = useLocalSearchParams();

  return <ProductPage productId={id[0]} />;
};

export default ProductScreen;
