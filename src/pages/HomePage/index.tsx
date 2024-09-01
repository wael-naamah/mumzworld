import { Text } from '@components';
import { Stack, Spinner } from 'tamagui';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store';
import { useEffect } from 'react';
import { fetchProducts } from '@/src/store/network';
import ProductList from './components/ProductList';

export default function HomePage() {
  const dispatch = useDispatch();

  const { data, status, error } = useSelector(
    (state: RootState) => state.productsSlice,
  );

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts() as any);
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return (
      <Stack flex={1} ai="center" jc="center">
        <Spinner />
      </Stack>
    );
  }

  if (status === 'failed') {
    return (
      <Stack flex={1} ai="center" jc="center">
        <Text>{error}</Text>
      </Stack>
    );
  }

  const products = data?.data?.products?.items || [];

  return (
    <Stack flex={1} ai="center" jc="center">
      <ProductList products={products} />
    </Stack>
  );
}
