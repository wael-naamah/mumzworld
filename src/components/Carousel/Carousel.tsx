import React from 'react';
import { YStack } from 'tamagui';
import { Dimensions, Image } from 'react-native';
import ReanimatedCarousel from 'react-native-reanimated-carousel';
export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

interface CarouselProps {
  data: any[];
}

const Carousel: React.FC<CarouselProps> = ({ data = [] }) => {
  return (
    <YStack mt={0} h={DEVICE_HEIGHT / 3.8}>
      <ReanimatedCarousel
        loop={false}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <YStack key={index} bc="white" h="100%" w={DEVICE_WIDTH - 20}>
              <Image
                key={index}
                source={{ uri: item.url }}
                style={{
                  width: '100%',
                  height: '100%',
                  marginRight: 10,
                  objectFit: 'contain',
                }}
              />
            </YStack>
          );
        }}
        width={DEVICE_WIDTH}
      />
    </YStack>
  );
};

export default Carousel;
