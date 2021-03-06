import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Container, InputText, IconContainer } from './styles';
import { Feather } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';

type InputProps = TextInputProps & {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
};

export function Input({ iconName, value, ...rest }: InputProps) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setFilled(!!value);
  }

  return (
    <Container>
      <IconContainer isFocused={isFocused}>
        <Feather
          name={iconName}
          size={24}
          color={
            isFocused || isFilled ? theme.colors.main : theme.colors.text_detail
          }
        />
      </IconContainer>

      <InputText
        isFocused={isFocused}
        {...rest}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  );
}
