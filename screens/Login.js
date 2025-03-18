import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { auth, getAuth, signInWithEmailAndPassword, signOut, } from '../firebase/config';
import { useState } from 'react';

export default function Login() {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[loading, setLoading] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const login = () => {
		console.log(password + password);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log("Login", userCredential);
				setUser(userCredential.user)
			})
			.catch((error) => {
				if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
					console.log('Invalid credentialssss');
					setErrorMessage('Invalid credentials!');
				} else if (error.code === 'auth/too-many-requests') {
					console.log('Too many attempts to login');
					setErrorMessage('Too many attempts to login!');
				} else {
					console.error(error.code, error.message);
				}
			});
	};

    return (
        <View style={styles.container}>
            <Text>Login</Text>

            <TextInput
				placeholder="Email"
				onChangeText={(email) => setEmail(email)}
			/>
			<TextInput
				placeholder="Password"
				onChangeText={(password) => setPassword(password)}
			/>

            <Button title='Submit' onPress={login}>
                
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
