import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { Load } from '../Load';
import { Container, Title } from './styles';

type ButtonProps = RectButtonProps & {
  title: string;
  color?: string;
  // onPress: () => void;
  // enabled?: boolean;
  loading?: boolean;
  light?: boolean;
};

export function Button({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
  light = false,
}: ButtonProps) {
  const theme = useTheme();
  return (
    <Container
      enabled={enabled}
      onPress={onPress}
      color={color ? color : theme.colors.main}
      style={{ opacity: enabled === false ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
}
