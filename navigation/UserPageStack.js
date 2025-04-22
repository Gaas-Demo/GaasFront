import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HistoryScreen from '../screens/HistoryScreen';
import UserPageTab from '../screens/UserPageTab';
import FeedbackScreen from '../screens/FeedbackScreen';
import HistoryEntryScreen from '../screens/HistoryEntryScreen';

const Stack = createNativeStackNavigator();

function UserPageStack({ initialRoute }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="UserPageTab" component={UserPageTab} />
            <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
            <Stack.Screen name="HistoryEntryScreen" component={HistoryEntryScreen} />
            <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
        </Stack.Navigator>
    )
}

export { UserPageStack }