import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, DefaultTheme } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from 'react-native-paper';

export default function DatePicker({ onDateChange }) {
    const [date, setDate] = React.useState(new Date());
    const [open, setOpen] = React.useState(false);


    const onDismissSingle = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirmSingle = React.useCallback(
        (params) => {
            setOpen(false);
            setDate(params.date);
            if (onDateChange) {
                onDateChange(params.date);
            }
        },
        [setOpen, setDate, onDateChange]
    );

    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: 'red',
        },
    };
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Text style={styles.text}>{new Intl.DateTimeFormat('en-GB').format(date).replace(/\//g, '.')}</Text>
                <Button
                    style={styles.button}
                    onPress={() => setOpen(true)}
                    uppercase={false}
                    mode="outlined"
                >Pick delivery date
                </Button>
                <PaperProvider theme={theme}>
                    <DatePickerModal
                        mode="single"
                        visible={open}
                        presentationStyle="pageSheet"
                        onDismiss={onDismissSingle}
                        date={date}
                        onConfirm={onConfirmSingle}
                        validRange={{
                            startDate: new Date(new Date().setDate(new Date().getDate() - 1)),
                        }}
                        startYear={2025}
                        endYear={2025}
                    />
                </PaperProvider>
            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 2,
    },
    text: {
        padding: 10,
        width: 128,

    },
    button: {
        width: 160,

    },
});