import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { Load } from '../Load';
import { Container, Title } from './styles';

type ButtonProps = {
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
  loading?: boolean;
};

export function Button({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
}: ButtonProps) {
  const theme = useTheme();
  return (
    <Container
      enabled={enabled}
      onPress={onPress}
      color={color ? color : theme.colors.main}
      style={{ opacity: enabled === false || loading === true ? 1 : 0.5 }}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
