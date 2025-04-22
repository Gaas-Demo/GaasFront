import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput, Button, Card, Avatar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function FeedbackScreen({ route }) {
    const [feedbackMessage, setFeedbackMessage] = useState("");

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <Text>Give us feedback about your experience.</Text>
                <TextInput
                    editable
                    multiline
                    numberOfLines={10}
                    maxLength={150}
                    onChangeText={text => setFeedbackMessage(text)}
                    value={feedbackMessage}
                    style={styles.textInput}
                />
                <Button style={styles.button} mode="contained" >Submit</Button>
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
    textInput: {
        flex: 1,
        margin: 10,
        borderColor: "#000",
        borderWidth: 1,
        borderStyle: "solid"
    }
});