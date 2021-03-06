import {
  BorderlessButton,
  RectButton,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

type OptionProps = {
  active: boolean;
};

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

const Header = styled.View`
  width: 100%;
  height: 227px;
  background-color: ${({ theme }) => theme.colors.header};

  padding: 0px 24px;
  align-items: center;
`;

const HeaderTop = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: ${getStatusBarHeight() + 32}px;
`;

const HeaderTitle = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.background_secondary};
`;

const LogoutButton = styled(BorderlessButton)``;

const PhotoContainer = styled.View`
  width: 180px;
  height: 180px;

  border-radius: 90px;

  background-color: ${({ theme }) => theme.colors.shape};
  margin-top: 48px;
`;

const Photo = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
`;

const PhotoButton = styled(RectButton)`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.main};

  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const Content = styled.View`
  padding: 0px 24px;
  margin-top: 122px;
`;

const Options = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};

  flex-direction: row;
  justify-content: space-around;

  margin-bottom: 24px;
`;

const Option = styled(TouchableOpacity)<OptionProps>`
  padding-bottom: 14px;
  ${({ active }) =>
    active &&
    css`
      border-bottom-width: 3px;
      border-bottom-color: ${({ theme }) => theme.colors.main};
    `}
`;

const OptionTitle = styled.Text<OptionProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme, active }) =>
    active ? theme.fonts.secondary_600 : theme.fonts.secondary_500};
  color: ${({ theme, active }) =>
    active ? theme.colors.header : theme.colors.text_detail};
`;

const Section = styled.View``;

export {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  LogoutButton,
  PhotoContainer,
  Photo,
  PhotoButton,
  Content,
  Options,
  Option,
  OptionTitle,
  Section,
};
