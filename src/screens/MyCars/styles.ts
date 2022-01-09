import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

const Header = styled.View`
  width: 100%;
  height: 325px;

  background-color: ${({ theme }) => theme.colors.header};

  justify-content: center;
  padding: 25px;
  padding-top: ${getStatusBarHeight() + 30}px;
`;

const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(30)}px;
  margin-top: 24px;
`;

const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(15)}px;

  margin-top: 24px;
`;

const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 16px;
`;

const Appointments = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 14px 0;
`;

const AppointmentTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
`;

const AppointmentQuantity = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
`;

const CarWrapper = styled.View`
  margin-bottom: 16px;
`;

const CarFooter = styled.View`
  width: 100%;
  padding: 12px;

  margin-top: -10px;

  flex-direction: row;
  align-items: center;

  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

const CarFooterTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
`;

const CarFooterPeriod = styled.View`
  flex-direction: row;
`;

const CarFooterDate = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(13)}px;
`;

export {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentTitle,
  AppointmentQuantity,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
};
