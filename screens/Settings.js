import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function Settings() {
  return (
    <View>
      <Text>Account settings</Text>

      <Text>example.email@gmail.com</Text>

      <Text>Change password</Text>
      <TextInput placeholder='Current password'></TextInput>
      <TextInput placeholder='New password'></TextInput>
      <TextInput placeholder='Confirm new password'></TextInput>

      <Button title='Change password'></Button>

      <Button title='Change profile picture'></Button>
      <Button title='Delete account'></Button>

    </View>
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