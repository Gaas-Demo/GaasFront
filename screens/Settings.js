import { StyleSheet, View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';


export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.headline} variant='titleLarge'>Account settings</Text>

      <Text style={styles.text} variant='bodyLarge'>example.email@gmail.com</Text>

      <Text style={styles.headline} variant='titleLarge'>Change password</Text>
      <TextInput style={styles.input} placeholder='Current password' secureTextEntry={true}></TextInput>
      <TextInput style={styles.input} placeholder='New password' secureTextEntry={true}></TextInput>
      <TextInput style={styles.input} placeholder='Confirm new password' secureTextEntry={true}></TextInput>

      <Button style={styles.button} mode="contained">Change password</Button>

      <Button style={styles.button} mode="contained">Change profile picture</Button>
      <Button style={styles.button} mode="contained">Delete account</Button>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headline: {
    marginBottom: 20,
    fontWeight: 'bold',
  },
  text: {
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 20,
  },
  button: {
    marginBottom: 10,
    width: '100%',
  },
});