import { View } from 'react-native';
import { Text } from '@components';

export default function HomePage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Home screen</Text>
    </View>
  );
}
