import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/Drawer';
import GarageScreen from './Screens/GarageScreen';
import CarInformationScreen from './Screens/CarInformationScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  
  return (
    /* Go to BottomTab.js or Drawer.js to add your screens to the navigation */
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
