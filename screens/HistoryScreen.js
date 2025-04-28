import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { View, FlatList, ScrollView, StyleSheet } from 'react-native'
import HistoryCard from '../components/HistoryCard';
import { useState } from 'react';
import carsData from '../Testi/testi'

export default function HistoryScreen({ navigation }) {

    const numColumns = 1;

    const [historyData, setHistoryData] = useState([
        {
            id: 1,
            brandName: "Porsche",
            Type: carsData[0].Type,
            dateStart: "2025-01-01",
            dateEnd: "2025-12-31",
            photo: carsData[0].photo
        },
        {
            id: 2,
            brandName: "Porsche",
            Type: carsData[1].Type,
            dateStart: "2025-01-01",
            dateEnd: "2025-12-31",
            photo: carsData[1].photo
        },
        {
            id: 3,
            brandName: "Porsche",
            Type: carsData[2].Type,
            dateStart: "2025-01-01",
            dateEnd: "2025-12-31",
            photo: carsData[2].photo
        }
    ]);

    console.log(historyData)

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>

                <FlatList
                    numColumns={numColumns}
                    data={historyData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.column}>
                            <HistoryCard item={item} navigation={navigation} />
                        </View>
                    )}
                />

            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        marginTop: 200,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    column: {

    }
});