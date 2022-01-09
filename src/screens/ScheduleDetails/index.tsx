import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Acessories,
  Footer,
  DataInfo,
  RentalPeriod,
  CalendarIcon,
  Datetitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { format, parseISO } from 'date-fns';
import { getPlataformDate } from '../../utils/getPlataformDate';
import { api } from '../../services/api';
import { Alert } from 'react-native';

type Params = {
  car: CarDTO;
  dates: string[];
};

type RentalPeriodProps = {
  start: string;
  end: string;
};

export function ScheduleDetails() {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>(
    {} as RentalPeriodProps
  );
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { car, dates } = route.params as Params;

  const rentalTotal = Number(dates.length) * car.rent.price;

  async function handleConfirm() {
    const response = await api.get(`/schedules_bycars/${car.id}`);

    const unavailable_dates = [...response.data.unavailable_dates, ...dates];

    api
      .put(`/schedules_bycars/${car.id}`, { id: car.id, unavailable_dates })
      .then(() => navigation.navigate('SchedulingComplete'))
      .catch(() => Alert.alert('Erro ao reservar o carro'));
  }

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlataformDate(parseISO(dates[0])), 'dd/MM/yyyy'),
      end: format(
        getPlataformDate(parseISO(dates[dates.length - 1])),
        'dd/MM/yyyy'
      ),
    });
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrls={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Acessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Acessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DataInfo>
            <Datetitle>DE</Datetitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DataInfo>

          <Feather
            name="chevron-right"
            size={RFValue(24)}
            color={theme.colors.text}
          />

          <DataInfo>
            <Datetitle>ATÉ</Datetitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DataInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>
              R$ {car.rent.price} x{dates.length} diárias
            </RentalPriceQuota>
            <RentalPriceTotal>R$ {rentalTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          color={theme.colors.success}
          title="Alugar agora"
          onPress={handleConfirm}
        />
      </Footer>
    </Container>
  );
}
