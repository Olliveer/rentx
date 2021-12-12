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

type Car = {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
};

type CarProps = {
  car: Car;
};

export function Car({ car }: CarProps) {
  return (
    <Container>
      <Details>
        <Brand>{car.brand}</Brand>
        <Name>{car.name}</Name>

        <About>
          <Rent>
            <Period>Ao dia</Period>
            <Price>{`R$ ${car.rent.price}`}</Price>
          </Rent>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>
      <CarImage
        source={{
          uri: car.thumbnail,
        }}
        resizeMode="contain"
      />
    </Container>
  );
}
