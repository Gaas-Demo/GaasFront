import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from 'react-native-paper';
import { TimePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function TimePicker() {

    const defaultTime = new Date()
    const [time, setTime] = React.useState({ hours: defaultTime.getHours(), minutes: defaultTime.getMinutes() });

    const [visible, setVisible] = React.useState(false)
    const onDismiss = React.useCallback(() => {
        setVisible(false)
    }, [setVisible])

    const onConfirm = React.useCallback(
        ({ hours, minutes }) => {
            setTime({ hours, minutes })
            setVisible(false);
        },
        [setVisible]
    );

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Text style={styles.text}>{time.hours}:{time.minutes}</Text>
                <Button style={styles.button}onPress={() => setVisible(true)} uppercase={false} mode="outlined">
                    Pick time
                </Button>
                <TimePickerModal
                    use24HourClock={true}
                    visible={visible}
                    onDismiss={onDismiss}
                    onConfirm={onConfirm}

                />
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