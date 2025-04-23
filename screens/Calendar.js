import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Agenda, CalendarProvider } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';

export let reservedCar = null;

export const updateReservedCar = (item, dateTime) => {
    reservedCar = { item, dateTime };
};

const CalendarScreen = () => {
    const [reservations, setReservations] = useState({});

    useFocusEffect(
        useCallback(() => {
            if (reservedCar) {
                const { item, dateTime } = reservedCar;
                const dateKey = dateTime.toISOString().split('T')[0];
                const formattedTime = dateTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });
                setReservations((prev) => ({
                    ...prev,
                    [dateKey]: [...(prev[dateKey] || []), { name: item.model, time: formattedTime }],
                }));
                reservedCar = null;
            }
        }, [])
    );

    return (
        <SafeAreaView style={styles.container}>
            <Agenda
                items={reservations}
                renderItem={(item) => {
                    return (
                        <View style={styles.item}>
                            <Text style={styles.itemText}>{item.name}</Text>
                            <Text style={styles.itemTime}>{item.time}</Text>
                        </View>)
                }}
                renderEmptyData={() => (
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>No reservations for this day</Text>
                    </View>
                )}
                pastScrollRange={1}

                futureScrollRange={1}
                showClosingKnob={true}
                calendarStyle={{

                }}
                theme={{
                    selectedDayBackgroundColor: "#DC3545",
                    todayTextColor: "#DC3545",
                    todayDotColor: "#DC3545",
                    selectedDotColor: "white",
                    dotColor: "#DC3545",
                    agendaDayTextColor: "black",
                    agendaDayNumColor: "black",
                    agendaTodayColor: "#DC3545",
                    agendaKnobColor: "#DC3545",
                }}
            />
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    item: {
        backgroundColor: "ghostwhite",
        padding: 15,
        marginVertical: 5,
        borderRadius: 5,
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    itemText: {
        fontFamily: "sans-serif-bold",
        fontSize: 16,
    },
    itemTime: {
        fontSize: 14,
        color: "gray",
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    emptyText: {
        fontSize: 16,
        color: "gray",
    },
});

export default CalendarScreen;