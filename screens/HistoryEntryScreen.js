import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, TextInput, Button, Card, Avatar } from 'react-native-paper';
import { Image, StyleSheet, View } from 'react-native';

export default function HistoryEntryScreen({ route, navigation }) {
    const { item } = route.params;

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <CarDetailsSimple item={item} />
                <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('CarInformationScreen', { item })}>Car Details</Button>
                <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('FeedbackScreen')}>Give Feedback</Button>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

function CarDetailsSimple({ item }) {
    console.log(item);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <SafeAreaView style={styles.carImageContainer}>
                    <Image style={styles.carImage} source={require('../Testi/auto.png')} />
                </SafeAreaView>
                <SafeAreaView style={styles.detailsContainer}>
                    <Text style={styles.detailsContainerTitle}>Car</Text>
                    <Text style={styles.detailsContainerHeader}>Brand</Text>
                    <Text style={styles.detailsText}>{item.brandName}</Text>
                    <Text style={styles.detailsContainerHeader}>Model</Text>
                    <Text style={styles.detailsText}>{item.modelName}</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.detailsContainer}>
                    <Text style={styles.detailsContainerTitle}>Contract</Text>
                    <Text style={styles.detailsContainerHeader}>Start Date</Text>
                    <Text style={styles.detailsText}>{item.dateStart}</Text>
                    <Text style={styles.detailsContainerHeader}>End Date</Text>
                    <Text style={styles.detailsText}>{item.dateEnd}</Text>
                </SafeAreaView>
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
    carImageContainer: {
        height: "50%",
        margin: 8,
        borderRadius: 10,
        padding: 4,
        backgroundColor: '#dddddd'
    },
    detailsContainer: {
        backgroundColor: '#dddddd',
        margin: 4,
        borderRadius: 10,
        padding: 4
    },
    carImage: {
        width: 'auto',
        height: "auto",
        aspectRatio: 1,
        resizeMode: 'contain'
    },
    detailsText: {
        backgroundColor: '#eeeeee',
        margin: 4,
        marginBottom: 0,
        padding: 4,
        borderRadius: 10
    },
    detailsContainerTitle: {
        fontWeight: "bold",
        fontSize: 20,
        margin: 4,
        marginBottom: 8,
        padding: 4,
    },
    detailsContainerHeader: {
        fontWeight: "bold",
        margin: 4,
        marginBottom: 0,
        padding: 4,
    }
});