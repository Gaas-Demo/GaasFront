import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { auth, getAuth, signInWithEmailAndPassword, signOut, } from '../firebase/config';
import { useState } from 'react';
import { useAuth } from '../context/AuthProvider';

export default function Login() {
    const { isLoggedIn, login, logout, user } = useAuth();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[loading, setLoading] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //testing if context works properly (token has to be sent with every HTTPS request and checked in backend)
    const giveToken = async () => {
        try {
            const token = await user.getIdToken(true);
            console.log("Firebase Token:", token);
        } catch (error) {
            console.error("Error fetching ID Token:", error.message);
            setErrorMessage("Error fetching ID token");
        }
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

            <Button title='Submit' onPress={() => login(email, password)}>
                
            </Button>

            <Button
                title='Logout' onPress={logout}>
            </Button>

            <Button
                title='Forgot password' onPress={giveToken}>
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

