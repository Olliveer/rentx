import React from 'react';
import { StatusBar } from 'react-native';

import { Container, Header, TotalCars, HeaderContent } from './styles';

import Logo from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { Car } from '../../components/Car';

export function Home() {
  const carData1 = {
    brand: 'audi',
    name: 'RS6 coupé',
    rent: {
      period: 'ao dia',
      price: 120,
    },
    thumbnail:
      'https://freebiescloud.com/wp-content/uploads/2021/03/Audi-RS6-Avant-2021-1.png',
  };

  const carData2 = {
    brand: 'audi',
    name: 'RS6 coupé',
    rent: {
      period: 'ao dia',
      price: 120,
    },
    thumbnail:
      'https://freebiescloud.com/wp-content/uploads/2021/03/Audi-RS6-Avant-2021-1.png',
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <Car car={carData1} />
      <Car car={carData2} />
    </Container>
  );
}
