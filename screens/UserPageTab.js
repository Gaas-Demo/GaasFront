import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, FlatList } from 'react-native';
import { Text, TextInput, Button, Card, Avatar } from 'react-native-paper';
<<<<<<< Updated upstream
=======
import { useState, useEffect } from 'react';
>>>>>>> Stashed changes

const userInfo = {
    firstName: "Pertti",
    lastName: "Makkonen",
    address: "Pääkatu 12",
    postalCode: "12345",
    city: "Pääkaupunki",
    email: "pertti.makkonen@example.com",
};

export default function UserPageTab({ navigation }) {
<<<<<<< Updated upstream

=======
    const [userData, setUserData] = useState({
        firstname: "Pertti",
        lastname: "Makkonen",
        birthday: "1990-01-01",
        email: "pertti.makkonen@example.com",
        ssn: "01011990AAAAA"
    });
>>>>>>> Stashed changes



    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <Button style={styles.button} mode="contained">User Settings</Button>
                <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('HistoryScreen')} >Vehicle History</Button>





            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const LeftContent = props => <Card.Cover source={require('../Testi/auto.png')} resizeMode='center' />



function HistoryCard({ item, navigation }) {
    return (
        <Card style={styles.cardcontainer}>

            <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
            <Card.Content>
                <Text variant="titleLarge">Card title</Text>
                <Text variant="bodyMedium">Card content</Text>
            </Card.Content>

            <Card.Cover source={require('../Testi/auto.png')}
                resizeMode='center'
            />

            <Text>{item.brandName}</Text>
            <Text>{item.modelName}</Text>
            <Text>{item.dateStart} - {item.dateEnd}</Text>
        </Card>
    )
}

function UserInfoComponent({ userInfo }) {
    return (
        <View style={styles.container}>
            <Text style={styles.headline}>
                User Information
            </Text>

            <TextInput style={styles.input} placeholder="First Name" value={userInfo.firstName} />
            <TextInput style={styles.input} placeholder="Last Name" value={userInfo.lastName} />
            <TextInput style={styles.input} placeholder="Address" value={userInfo.address} />
            <TextInput style={styles.input} placeholder="Postal Code" value={userInfo.postalCode} />
            <TextInput style={styles.input} placeholder="City" value={userInfo.city} />
            <TextInput style={styles.input} placeholder="Email" value={userInfo.email} />
            <TextInput style={styles.input} placeholder="Password" />

            <Button style={styles.button} mode="contained" title='Save' >
                Save
            </Button>
        </View>
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