import React from 'react';
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

export function ImageSlider({ imagesUrls }: ImageSliderProps) {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage source={{ uri: imagesUrls[0] }} resizeMode="contain" />
      </CarImageWrapper>
    </Container>
  );
}
