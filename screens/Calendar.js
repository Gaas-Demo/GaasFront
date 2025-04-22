import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Agenda, CalendarProvider } from 'react-native-calendars';

export let reservedCar = null;

export const updateReservedCar = (item, dateTime) => {
    reservedCar = { item, dateTime };
};

const AgendaItem = React.memo(({ item }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemTime}>{item.time}</Text>
        </View>
    );
});

const CalendarScreen = () => {
    const [reservations, setReservations] = useState({});

    useFocusEffect(
        React.useCallback(() => {
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
        <View style={styles.container}>
            <CalendarProvider>
                <Agenda
                    items={reservations}
                    renderItem={(item) => <AgendaItem item={item} />}
                    renderEmptyData={() => (
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>No reservations for this day</Text>
                        </View>
                    )}
                    pastScrollRange={1}
                    futureScrollRange={4}
                    showClosingKnob = {true}
                    calendarStyle={{

                    }}
                    theme={{
                        selectedDayBackgroundColor: 'red',
                        todayTextColor: 'red',
                        todayDotColor: 'red',
                        selectedDotColor: 'white',
                        dotColor: 'red',
                        agendaDayTextColor: 'black',
                        agendaDayNumColor: 'black',
                        agendaTodayColor: 'red',
                        agendaKnobColor: 'red',
                    }}
                />
            </CalendarProvider>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    item: {
        backgroundColor: 'ghostwhite',
        padding: 15,
        marginVertical: 5,
        borderRadius: 5,
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemTime: {
        fontSize: 14,
        color: 'gray',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    emptyText: {
        fontSize: 16,
        color: 'gray',
    },
});

export default CalendarScreen;