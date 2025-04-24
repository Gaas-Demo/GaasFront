import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, TextInput, Button, Card, Avatar } from 'react-native-paper';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

export default function HistoryEntryScreen({ route, navigation }) {
    const { item } = route.params;

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={{ width: '100%', margin: 4 }}>
                    <Text style={{ fontFamily: 'sans-serif-medium', fontSize: 20 }}>{item.brandName}</Text>
                    <Text style={{ fontFamily: 'sans-serif-medium', fontSize: 28, fontWeight: 'bold' }}>{item.modelName}</Text>
                </View>
                <ScrollView contentContainerStyle={{ margin: 4, gap: 4, minHeight: '100%' }} >

                    <View style={styles.carImageContainer}>
                        <Image style={styles.carImage} source={require('../Testi/auto.png')} />
                    </View>
                    <View style={{ width: '100%', borderRadius: 10, borderWidth: 4, borderColor: '#DC3545', padding: 4, gap: 4 }}>
                        <InfoContainerHeader title={'Contract'} />
                        <InfoContainerDetail title={'Garage'} content={item.garage ?? '-'} />
                        <InfoContainerDetail title={'Extra Services'} content={item.extras ?? '-'} />
                        <InfoContainerDetail title={'Start Date'} content={item.dateStart ?? '-'} />
                        <InfoContainerDetail title={'End Date'} content={item.dateEnd ?? '-'} />
                    </View>
                    <View style={{ flex: 1, gap: 4, marginTop: 16, marginBottom: 100 }}>
                        <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('CarInformationScreen', { item })}>Car Details</Button>
                        <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('FeedbackScreen')}>Feedback</Button>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

function InfoContainerHeader({ title }) {
    return (
        <View style={styles.infoContainerHeader}>
            <Text style={styles.infoContainerTitle}>{title}</Text>
            <View style={styles.line} />
        </View>
    )
}

function InfoContainerDetail({ title, content }) {
    return (
        <View style={styles.infoContainerDetail}>
            <Text style={styles.infoContainerDetailTitle}>{title}</Text>
            <Text style={styles.infoContainerDetailText}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    carImageContainer: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: '#DC3545',
        overflow: 'hidden',
        gap: 4
    },
    carImage: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain',
        backgroundColor: '#ddd'
    },
    infoContainerHeader: {

    },
    infoContainerDetail: {

    },
    infoContainerTitle: {
        fontFamily: 'sans-serif-medium',
        fontSize: 24,
        fontWeight: '500'
    },
    infoContainerDetailTitle: {
        fontFamily: 'sans-serif-medium',
        fontWeight: '100',
        fontSize: 16
    },
    infoContainerDetailText: {
        fontFamily: 'sans-serif-medium',
        fontSize: 14
    },
    line: {
        marginTop: 4,
        marginBottom: 4,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    button: {
        width: '100%',
        backgroundColor: '#DC3545'
    },
});