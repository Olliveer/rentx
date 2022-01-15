import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';
import {
  CarImage,
  CarImageWrapper,
  Container,
  ImageIndex,
  ImageIndexes,
} from './styles';

type ImageSliderProps = {
  imagesUrls: string[];
};

type ChangeImageProps = {
  viewAbleItems: ViewToken[];
  changed: ViewToken[];
};

export function ImageSlider({ imagesUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
    waitForInteraction: true,
    minimumViewTime: 5,
  });

  const indexChanged = useRef(
    ({ changed, viewAbleItems }: ChangeImageProps) => {
      if (changed && changed.length > 0) {
        setImageIndex(changed[0].index! ?? 0);
      }
    }
  );

  return (
    <Container>
      <ImageIndexes>
        {imagesUrls.map((_, index) => (
          <ImageIndex active={index === imageIndex} key={String(index)} />
        ))}
      </ImageIndexes>

      <FlatList
        data={imagesUrls}
        keyExtractor={(key: string) => key}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode="contain" />
          </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
        viewabilityConfig={viewabilityConfig.current}
      />
    </Container>
  );
}
