import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import DetailsScreen from '../screens/detailsScreen';
import PaymentScreen from '../screens/paymentScreen';


const Navigators = () => {
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{animation: 'slide_from_bottom'}}></Stack.Screen>
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{animation: 'slide_from_bottom'}}></Stack.Screen>
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{animation: 'slide_from_bottom'}}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigators