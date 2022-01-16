import React from 'react';
import LottieView from 'lottie-react-native';

import { Container } from './styles';
import Load from '../../assets/load.json';

export function LoadAnimation() {
  return (
    <Container>
      <LottieView
        source={Load}
        autoPlay
        style={{
          height: 200,
        }}
        resizeMode="contain"
        loop
      />
    </Container>
  );
}
