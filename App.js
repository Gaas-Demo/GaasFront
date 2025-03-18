import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Map from './screens/Map';
import Login from './screens/Login';
import Register from './screens/Register';
import { AuthProvider } from './context/AuthProvider';


export default function App() {
  return (
    <AuthProvider>
      <View>
        <Login />
        <Register />
      </View> 
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
