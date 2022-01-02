import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { Container } from './styles';

type BackButtonProps = BorderlessButtonProps & {
  color?: string;
};

export function BackButton({ color }: BackButtonProps) {
  const theme = useTheme();
  return (
    <Container>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
}
