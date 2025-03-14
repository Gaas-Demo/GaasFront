import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function Login() {
    return (
        <View>
            <Text>Login</Text>

            <TextInput
                placeholder='Email'>
            </TextInput>

            <TextInput
                placeholder='Password'>
            </TextInput>

            <Button
                title='Submit'>
            </Button>

            <Button
                title='Forgot password'>
            </Button>
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