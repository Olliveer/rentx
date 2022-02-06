import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import * as Yup from 'yup';
import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle,
} from './styles';

export function FirstStep() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cnh, setCnh] = useState('');

  function handleBack() {
    navigation.goBack();
  }

  async function goToSecondStep() {
    try {
      const schema = Yup.object().shape({
        cnh: Yup.string().required('CNH required'),
        email: Yup.string()
          .required('Email is required')
          .email('Type a valid email'),
        name: Yup.string().required('Name required'),
      });

      const data = { name, email, cnh };

      await schema.validate(data);

      navigation.navigate('SecondStep', { user: data });
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
            <FormTitle>1. Dados</FormTitle>

            <Input
              iconName="user"
              placeholder="Nome"
              value={name}
              onChangeText={setName}
            />
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <Input
              iconName="credit-card"
              placeholder="CNH"
              keyboardType="numeric"
              value={cnh}
              onChangeText={setCnh}
            />
          </Form>

          <Button title="Próximo" onPress={goToSecondStep} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
