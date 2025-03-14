import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function Register() {
  return (
    <View>
      <Text>Account info</Text>

      <TextInput
        placeholder='Email'>
      </TextInput>

      <TextInput
        placeholder='Password'>
      </TextInput>

      <TextInput
        placeholder='Confirm password'>
      </TextInput>

      <Text>Personal info</Text>

      <TextInput
        placeholder='First name'>
      </TextInput>

      <TextInput
        placeholder='Last name'>
      </TextInput>

      <TextInput
        placeholder='Phone number'>
      </TextInput>

      <TextInput
        placeholder='Social security number'>
      </TextInput>

      <Button title='Submit'></Button>
      <Button title='Terms of Service'></Button>







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