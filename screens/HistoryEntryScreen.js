import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, TextInput, Button, Card, Avatar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function HistoryEntryScreen({ route, navigation }) {
    const { item } = route.params;

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('CarInformationScreen')}>Car Details</Button>
                <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('FeedbackScreen')}>Give Feedback</Button>
            </SafeAreaView>
        </SafeAreaProvider>
    )
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
    cardcontainer: {
        backgroundColor: 'white',
        height: "calc(100% - 8px)",
    },
});