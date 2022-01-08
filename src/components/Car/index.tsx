import React from 'react';
import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  CarImage,
  Period,
  Type,
  Price,
} from './styles';

import GasolineSvg from '../../assets/gasoline.svg';
import { RectButtonProps } from 'react-native-gesture-handler';

type Car = {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
};

type CarProps = RectButtonProps & {
  data: Car;
};

export function Car({ data, ...rest }: CarProps) {
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>Ao dia</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>
      <CarImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode="contain"
      />
    </Container>
  );
}
