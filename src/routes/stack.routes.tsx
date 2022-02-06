import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Confirmation } from '../screens/Confirmation';
import { Schedule } from '../screens/Schedule';
import { ScheduleDetails } from '../screens/ScheduleDetails';
import { CarDTO } from '../dtos/CarDTO';
import { MyCars } from '../screens/MyCars';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';
import { FirstStep } from '../screens/SignUp/FirstStep';
import { SecondStep } from '../screens/SignUp/SecondStep';
import { User } from '../dtos/UserDTO';

export type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  CarDetails: { car: CarDTO };
  Confirmation: { title: string; message: string; nextScreenRoute: string };
  Schedule: { car: CarDTO };
  ScheduleDetails: { car: CarDTO; dates: string[] };
  MyCars: undefined;
  Splash: undefined;
  FirstStep: undefined;
  SecondStep: { user: User };
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function StackRoutes() {
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
      <Screen
        options={{
          gestureEnabled: false,
        }}
        name="Home"
        component={Home}
      />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="Schedule" component={Schedule} />
      <Screen name="ScheduleDetails" component={ScheduleDetails} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
