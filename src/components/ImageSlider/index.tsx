import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';
import { Bullet } from '../Bullet';
import { CarImage, CarImageWrapper, Container, ImageIndexes } from './styles';

type ImageSliderProps = {
  imagesUrls: {
    id: string;
    photo: string;
  }[];
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
    },
  );

  return (
    <Container>
      <ImageIndexes>
        {imagesUrls.map((item, index) => (
          <Bullet active={index === imageIndex} key={String(item.id)} />
        ))}
      </ImageIndexes>

      <FlatList
        data={imagesUrls}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item.photo }} resizeMode="contain" />
          </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        // @ts-ignore
        onViewableItemsChanged={indexChanged.current}
        viewabilityConfig={viewabilityConfig.current}
      />
    </Container>
  );
}
