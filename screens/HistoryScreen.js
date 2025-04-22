import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { View,  FlatList, ScrollView, StyleSheet } from 'react-native'
import HistoryCard from '../components/HistoryCard';
import { useState } from 'react';

export default function HistoryScreen({ navigation }) {

    const numColumns = 1;

    const [historyData, setHistoryData] = useState([
        {
            id: 1,
            brandName: "Porsche",
            modelName: "Model 1",
            dateStart: "2025-01-01",
            dateEnd: "2025-12-31"
        },
        {
            id: 2,
            brandName: "Porsche",
            modelName: "Model 2",
            dateStart: "2025-01-01",
            dateEnd: "2025-12-31"
        },
        {
            id: 3,
            brandName: "Porsche",
            modelName: "Model 3",
            dateStart: "2025-01-01",
            dateEnd: "2025-12-31"
        },
        {
            id: 4,
            brandName: "Porsche",
            modelName: "Model 4",
            dateStart: "2025-01-01",
            dateEnd: "2025-12-31"
        },
        {
            id: 5,
            brandName: "Porsche",
            modelName: "Model 3",
            dateStart: "2025-01-01",
            dateEnd: "2025-12-31"
        },
        {
            id: 6,
            brandName: "Porsche",
            modelName: "Model 4",
            dateStart: "2025-01-01",
            dateEnd: "2025-12-31"
        },
        {
            id: 7,
            brandName: "Porsche",
            modelName: "Model 3",
            dateStart: "2025-01-01",
            dateEnd: "2025-12-31"
        },
        {
            id: 8,
            brandName: "Porsche",
            modelName: "Model 4",
            dateStart: "2025-01-01",
            dateEnd: "2025-12-31"
        },
        {
            id: 9,
            brandName: "Porsche",
            modelName: "Model 3",
            dateStart: "2025-01-01",
            dateEnd: "2025-12-31"
        },
        {
            id: 10,
            brandName: "Porsche",
            modelName: "Model 4",
            dateStart: "2025-01-01",
            dateEnd: "2025-12-31"
        },
        {
            id: 11,
            brandName: "Porsche",
            modelName: "Model 3",
            dateStart: "2025-01-01",
            dateEnd: "2025-12-31"
        },
        {
            id: 12,
            brandName: "Porsche",
            modelName: "Model 4",
            dateStart: "2025-01-01",
            dateEnd: "2025-12-31"
        }
    ]);

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