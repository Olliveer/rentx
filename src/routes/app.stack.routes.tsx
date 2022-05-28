import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CarDTO } from '../dtos/CarDTO';
import { User } from '../dtos/UserDTO';
import { CarDetails } from '../screens/CarDetails';
import { Confirmation } from '../screens/Confirmation';
import { Home } from '../screens/Home';
import { MyCars } from '../screens/MyCars';
import { Schedule } from '../screens/Schedule';
import { ScheduleDetails } from '../screens/ScheduleDetails';

export type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
  CarDetails: { carId: string };
  Confirmation: { title: string; message: string; nextScreenRoute: string };
  Schedule: { car: CarDTO };
  ScheduleDetails: { car: CarDTO; dates: string[] };
  MyCars: undefined;
  Splash: undefined;
  FirstStep: undefined;
  SecondStep: { user: User };
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function AppStackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="Schedule" component={Schedule} />
      <Screen name="ScheduleDetails" component={ScheduleDetails} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
