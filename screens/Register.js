import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { auth, getAuth, createUserWithEmailAndPassword, signOut, } from '../firebase/config';
import { useState } from 'react';

export default function Register() {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[username, setUsername] = useState('');
    const[loading, setLoading] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const register = async () => {
        try {
          await createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            console.log("account created")
          //setUser(userCredential.user);
        });

        } catch (error) {
          setErrorMessage(error.message);
        }
      };

    return (
        <View style={styles.container}>
          <Text>Register here</Text>

          <TextInput
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}
          />
          <TextInput
            placeholder="username"
            onChangeText={(username) => setUsername(username)}
          />

          <Button title='Submit' onPress={register}>
              
          </Button>

          <Button
              title='Forgot password'>
          </Button>

          <Text>
              {errorMessage}
          </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        //flex: 1,
        marginTop: 200,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
