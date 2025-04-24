import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput, Button, Card, Avatar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

export default function FeedbackScreen({ route }) {
    const [feedbackMessage, setFeedbackMessage] = useState("");

    const onPressSubmit = () => {
        setFeedbackMessage('');
        console.log(feedbackMessage);  
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.container2}>
                    <Text style={styles.text}>Give us feedback about your experience.</Text>
                    <TextInput
                        editable
                        multiline
                        numberOfLines={10}
                        maxLength={300}
                        onChangeText={text => setFeedbackMessage(text)}
                        value={feedbackMessage}
                        style={styles.textInput}
                    />
                    <Button style={styles.button} mode="contained" onPress={() => onPressSubmit()}>Submit</Button>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    container2: {
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', //Centered horizontally
        flex: 1
    },
    headline: {
        marginBottom: 20,
        fontWeight: 'bold',
    },
    text: {
        fontFamily: 'sans-serif-medium'
    },
    input: {
        width: '100%',
        maxHeight: 10,
        marginBottom: 20,
    },
    button: {
        width: '100%',
        backgroundColor: '#DC3545',
        marginBottom: 10
    },
    cardcontainer: {
        backgroundColor: 'white',
        height: "calc(100% - 8px)",
    },
    textInput: {
        minHeight: 200,
        backgroundColor: '#fff',
        width: '100%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});