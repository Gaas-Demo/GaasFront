import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GarageScreen from './Screens/GarageScreen';
import CarInformationScreen from './Screens/CarInformationScreen';

export default function App() {
  return (

   //   <GarageScreen/>
    <CarInformationScreen/>
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
