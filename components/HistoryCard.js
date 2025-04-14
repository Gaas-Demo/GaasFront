import { StyleSheet, Image } from 'react-native';
import { Text, TextInput, Button, Card, Avatar } from 'react-native-paper';


export default function HistoryCard({ item, navigation }) {
    return (
        <Card onPress={() => navigation.navigate('HistoryEntryScreen',{item})}>
            <Card.Cover source={require('../Testi/auto.png')}
                resizeMode='contain'
            />
            <Card.Content>
                <Text variant="titleSmall">{item.brandName ?? "???"}</Text>
                <Text variant="titleMedium">{item.modelName  ?? "???"}</Text>
                <Text variant="labelSmall">+ {item.extras ?? " No Extras"}</Text>
                <Text variant="bodyMedium">{item.dateStart} - {item.dateEnd}</Text>
            </Card.Content>
        </Card>
    )
}