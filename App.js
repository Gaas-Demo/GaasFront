import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { AuthProvider } from './context/AuthProvider';
import { AppNavigator } from './navigation/AppNavigator';

export default function App() {

  
  return (
    <AuthProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </AuthProvider>
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
