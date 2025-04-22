import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, DefaultTheme } from 'react-native-paper';
import { TimePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from 'react-native-paper';


export default function TimePicker({ onTimeChange }) {
    const currentDate = new Date()
    const [time, setTime] = React.useState({ hours: currentDate.getHours(), minutes: currentDate.getMinutes() });

    const [visible, setVisible] = React.useState(false)
    const onDismiss = React.useCallback(() => {
        setVisible(false)
    }, [setVisible])

    const onConfirm = React.useCallback(
        ({ hours, minutes }) => {
            setTime({ hours, minutes })
            setVisible(false);
            if (onTimeChange) {
                onTimeChange({ hours, minutes });
            }
        },
        [setVisible, onTimeChange]
    );

    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: 'red',
            surface: 'white',
            surfaceVariant: 'ghostwhite',
            secondaryContainer: 'red',
            onBackground: 'black'

        },
    };

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Text style={styles.text}>{time.hours}:{time.minutes.toString().padStart(2, '0')}</Text>
                <Button style={styles.button} onPress={() => setVisible(true)} uppercase={false} mode="outlined">
                    Pick time
                </Button>
                <PaperProvider theme={theme}>
                    <TimePickerModal
                        use24HourClock={true}
                        visible={visible}
                        onDismiss={onDismiss}
                        onConfirm={onConfirm}
                    />
                </PaperProvider>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 2
    },
    text: {
        padding: 10,
        width: 128
    },
    button: {
        width: 160
    }

})