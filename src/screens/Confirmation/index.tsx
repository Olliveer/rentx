import React from 'react';
import { Container, Content, Title, Message, Footer } from './styles';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import { StatusBar, useWindowDimensions } from 'react-native';
import { ConfirmButton } from '../../components/ConfirmButton';
import { useNavigation, useRoute } from '@react-navigation/native';

type ConfirmationParams = {
  title: string;
  message: string;
  nextScreenRoute: string;
};

export function Confirmation() {
  const route = useRoute();
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const { title, message, nextScreenRoute } =
    route.params as ConfirmationParams;

  function handleConfirm() {
    // @ts-ignore
    navigation.navigate(nextScreenRoute, { title, message, nextScreenRoute });
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />

        <Title>{title}</Title>

        <Message>{message}</Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}
