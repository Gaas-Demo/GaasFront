import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GarageScreen from '../screens/GarageScreen';
import CarInformationScreen from '../screens/CarInformationScreen';

const Stack = createNativeStackNavigator();

function StackScreen1({initialRoute}) {

  return (
    <Stack.Navigator>
      <Stack.Screen name="GarageScreen" component={GarageScreen} />
      <Stack.Screen name="CarInformationScreen" component={CarInformationScreen} />
    </Stack.Navigator>
  )
}
export {StackScreen1}