import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { PasswordInput } from '../../../components/PasswordInput';
import { User } from '../../../dtos/UserDTO';
import { api } from '../../../services/api';
import {
  Container,
  Form,
  FormTitle,
  Header,
  Steps,
  SubTitle,
  Title,
} from './styles';

type Params = {
  user: User;
};

export function SecondStep() {
  const route = useRoute();
  const theme = useTheme();
  const navigation = useNavigation();
  const { user } = route.params as Params;
  const [password, setPassword] = useState('');
  const [passwordConfimartion, setPasswordConfirmation] = useState('');

  function handleBack() {
    navigation.goBack();
  }

  async function handleRegister() {
    try {
      const schema = Yup.object().shape({
        password: Yup.string().required('Password required'),
        passwordConfimartion: Yup.string().oneOf(
          [Yup.ref('password'), null],
          'Passwords must match',
        ),
      });

      await schema.validate(
        { password, passwordConfimartion },
        { abortEarly: false },
      );

      await api
        .post('/users', {
          name: user.name,
          email: user.email,
          driver_license: user.driverLicense,
          password,
        })
        .then(() => {
          navigation.navigate('Confirmation', {
            title: 'Conta criada!',
            message: 'Agora é só fazer\n login',
            nextScreenRoute: 'SignIn',
          });
        })
        .catch(() => {
          Alert.alert('Ops!', 'Something went wrong');
        });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Ops!', error.message);
      } else {
        Alert.alert('Ops!', 'Something went wrong');
      }
    }
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet active={false} />
              <Bullet active />
            </Steps>
          </Header>

          <Title>Crie seu{'\n'}conta</Title>

          <SubTitle>
            Faça seu cadastro de{'\n'}
            forma rápida e fácil
          </SubTitle>

          <Form>
            <FormTitle>2. Senha</FormTitle>

            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Repetir senha"
              value={passwordConfimartion}
              onChangeText={setPasswordConfirmation}
            />
          </Form>

          <Button
            title="Cadastrar"
            color={theme.colors.success}
            onPress={handleRegister}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
