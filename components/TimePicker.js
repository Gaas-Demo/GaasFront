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
            primary: "#DC3545", //clock hand, cancel, ok
            surface: "white", //background
            onSurface: "#DC3545", //clock times and not active time container
            surfaceVariant: "ghostwhite", //background of clock and not active time container
            onPrimaryContainer: "white", //active time container text and border
            secondaryContainer: "#DC3545", //active time container
            onSurfaceVariant: "white", //"Select time" text in top left corner. Same color as background to hide it"
            onBackground: "#DC3545" //Button to switch input mode

        },
    };

    return (
            <View style={styles.container}>
                <Button style={styles.button} onPress={() => setVisible(true)} uppercase={false} mode="contained">
                    Pick time
                </Button>
                <Text style={styles.text}>{time.hours}:{time.minutes.toString().padStart(2, '0')}</Text>
                <PaperProvider theme={theme}>
                    <TimePickerModal
                        use24HourClock={true}
                        visible={visible}
                        onDismiss={onDismiss}
                        onConfirm={onConfirm}
                    />
                </PaperProvider>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        minHeight: 80,
        alignItems: "center",
        backgroundColor: "white",
        marginBottom: 15,

        
    },
    text: {
        padding: 10,
        width: 128,
        textAlign: "center",
    },
    button: {
        width: 160,
        backgroundColor: "#DC3545",
    }

})