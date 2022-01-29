import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Container, InputText, IconContainer } from './styles';
import { Feather } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

type InputProps = TextInputProps & {
  iconName: React.ComponentProps<typeof Feather>['name'];
};

export function PasswordInput({ iconName, ...rest }: InputProps) {
  const theme = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={theme.colors.text_detail} />
      </IconContainer>

      <InputText {...rest} secureTextEntry={isPasswordVisible} />

      <BorderlessButton onPress={handlePasswordVisibilityChange}>
        <IconContainer>
          <Feather
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={24}
            color={theme.colors.text_detail}
          />
        </IconContainer>
      </BorderlessButton>
    </Container>
  );
}
