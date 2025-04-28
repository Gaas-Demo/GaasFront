import { StyleSheet, Image, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { Text, TextInput, Button, Card, Avatar } from 'react-native-paper';

export default function HistoryCard({ item, navigation }) {
    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('HistoryEntryScreen', { item })}>
            <SafeAreaView style={styles.topContainer}>
                <SafeAreaView style={styles.topContainerLeft}>
                    <Image style={styles.image} source={item.photo} />
                </SafeAreaView>
                <SafeAreaView style={styles.topContainerRight}>
                    <Text style={styles.text}>NEW</Text>
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={styles.line} />
            <SafeAreaView style={styles.bottomContainer}>
                <Text variant="titleSmall" style={styles.text}>{item.brandName ?? "???"}</Text>
                <Text variant="titleMedium" style={styles.text}>{item.Type ?? "???"}</Text>
                <Text variant="labelSmall" style={styles.text}>{item.extras ?? "-"}</Text>
                <Text variant="bodyMedium" style={styles.text}>{item.dateStart} - {item.dateEnd}</Text>
            </SafeAreaView>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        margin: 4,
        padding: 8,
        height: 200,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: '#DC3545'
    },
    topContainer: {
        flex: 10,
        flexDirection: 'row'
    },
    topContainerLeft: {
        flex: 3,
        borderRadius: 10,
        overflow: 'hidden',
    },
    topContainerRight: {
        flex: 4,
        alignItems: 'flex-end'
    },
    line: {
        flex: 1,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    bottomContainer: {
        flex: 10,
        flexDirection: 'column'
    },
    image: {
        width: '100%',
        height: '100%',
        padding: 8,
        resizeMode: 'contain',
        flex: 1,
        backgroundColor: '#ddd'
    },
    text: {
        fontFamily: 'sans-serif-medium'
    }
});
