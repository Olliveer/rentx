import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CarDTO } from '../dtos/CarDTO';
import { User } from '../dtos/UserDTO';
import { Confirmation } from '../screens/Confirmation';
import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { FirstStep } from '../screens/SignUp/FirstStep';
import { SecondStep } from '../screens/SignUp/SecondStep';
import { Splash } from '../screens/Splash';

export type RootStackParamList = {
  SignIn: undefined;
  Confirmation: { title: string; message: string; nextScreenRoute: string };
  Splash: undefined;
  FirstStep: undefined;
  SecondStep: { user: User };
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Splash"
    >
      <Screen name="Splash" component={Splash} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="FirstStep" component={FirstStep} />
      <Screen name="SecondStep" component={SecondStep} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
}
