import React, { useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, StatusBar } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { Container, Header, Title, SubTitle, Form, Footer } from './styles';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

export function SignIn() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSigIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail required')
          .email('Type a valid e-mail'),
        password: Yup.string().required('Password required'),
      });

      await schema.validate({ email, password }, { abortEarly: false });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Ops!', error.message);
      } else {
        Alert.alert('Ops!', 'Something went wrong');
      }
    }
  }

  function handleNewAccount() {
    navigation.navigate('FirstStep');
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />
          <Header>
            <Title>Estamos {'\n'}quase lá.</Title>
            <SubTitle>
              Faça seu login para começar{'\n'}
              uma experiência incrível.
            </SubTitle>
          </Header>

          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />

            <PasswordInput
              onChangeText={setPassword}
              iconName="lock"
              placeholder="Password"
              value={password}
            />
          </Form>

          <Footer>
            <Button
              onPress={handleSigIn}
              title="Login"
              enabled
              loading={false}
            />

            <Button
              title="Criar conta gratuita"
              enabled
              loading={false}
              onPress={handleNewAccount}
              light
              color={theme.colors.background_secondary}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
