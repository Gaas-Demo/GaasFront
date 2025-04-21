import { StyleSheet, Image } from 'react-native';
import { Text, TextInput, Button, Card, Avatar } from 'react-native-paper';


export default function HistoryCard({ item, navigation }) {
    return (
<<<<<<< Updated upstream
        <Card onPress={() => navigation.navigate('HistoryEntryScreen',{item})}>
=======
        <Card style={styles.card} onPress={() => navigation.navigate('HistoryEntryScreen',{item})}>
>>>>>>> Stashed changes
            <Card.Cover source={require('../Testi/auto.png')}
                resizeMode='contain'
            />
            <Card.Content>
                <Text variant="titleSmall">{item.brandName ?? "???"}</Text>
                <Text variant="titleMedium">{item.modelName  ?? "???"}</Text>
<<<<<<< Updated upstream
                <Text variant="labelSmall">+ {item.extras ?? " No Extras"}</Text>
=======
                <Text variant="labelSmall">{item.extras ?? "-"}</Text>
>>>>>>> Stashed changes
                <Text variant="bodyMedium">{item.dateStart} - {item.dateEnd}</Text>
            </Card.Content>
        </Card>
    )
<<<<<<< Updated upstream
}
=======
}

const styles = StyleSheet.create({
    card: {
        margin: 8
    }
});
>>>>>>> Stashed changes
