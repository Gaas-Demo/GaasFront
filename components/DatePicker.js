import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function DatePicker() {
    const [date, setDate] = React.useState(new Date());
    const [open, setOpen] = React.useState(false);

    const onDismissSingle = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirmSingle = React.useCallback(
        (params) => {
            setOpen(false);
            setDate(params.date);
        },
        [setOpen, setDate]
    );

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Text style={styles.text}>{date.toDateString()}</Text>
                <Button style={styles.button} onPress={() => setOpen(true)} uppercase={false} mode="outlined">
                    Pick delivery date
                </Button>
                <DatePickerModal
                    locale="en"
                    mode="single"
                    visible={open}
                    onDismiss={onDismissSingle}
                    date={date}
                    onConfirm={onConfirmSingle}
                />
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