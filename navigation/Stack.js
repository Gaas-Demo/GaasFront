import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GarageScreen from '../screens/GarageScreen';
import CarInformationScreen from '../screens/CarInformationScreen';
import HistoryScreen from '../screens/HistoryScreen';
import Map from '../screens/Map';


const Stack = createNativeStackNavigator();

function StackScreen1({initialRoute}) {

  return (
    <Stack.Navigator >
      <Stack.Screen name="GarageScreen" component={GarageScreen}  />
      <Stack.Screen name="Carscreen" component={CarInformationScreen}
          />
    </Stack.Navigator>
  )
}
export {StackScreen1}