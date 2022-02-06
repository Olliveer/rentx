import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { SchedulingComplete } from '../screens/SchedulingComplete';
import { Schedule } from '../screens/Schedule';
import { ScheduleDetails } from '../screens/ScheduleDetails';
import { CarDTO } from '../dtos/CarDTO';
import { MyCars } from '../screens/MyCars';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';

export type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  CarDetails: { car: CarDTO };
  SchedulingComplete: undefined;
  Schedule: { car: CarDTO };
  ScheduleDetails: { car: CarDTO; dates: string[] };
  MyCars: undefined;
  Splash: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SignIn"
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen
        options={{
          gestureEnabled: false,
        }}
        name="Home"
        component={Home}
      />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
      <Screen name="Schedule" component={Schedule} />
      <Screen name="ScheduleDetails" component={ScheduleDetails} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
