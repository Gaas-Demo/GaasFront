import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Icon } from 'react-native-paper';
import GarageScreen from '../screens/GarageScreen';
import CarInformationScreen from '../screens/CarInformationScreen';
import Map from '../screens/Map';
import Homepage from '../screens/HomepageComponent';
import UserPageTab from '../screens/UserPageTab';
import FeedbackScreen from '../screens/FeedbackScreen';
import HistoryScreen from '../screens/HistoryScreen';
import HistoryEntryScreen from '../screens/HistoryEntryScreen';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: true,
                headerShown: false,
                tabBarActiveTintColor: '#FF4242',
                tabBarInactiveTintColor: '#8e8e8e',
                headerLeft: () => (
                    <DrawerToggleButton />
                )
            })}>
            <Tab.Screen
                name="Contracts"
                component={Homepage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon source="garage-variant" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Car Search"
                component={GarageScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon source="car-hatchback" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Map"
                component={Map}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon source="map-search" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Me"
                component={UserPageTab}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon source="account" size={size} color={color} />
                    )
                }}
            />

            {/* <Tab.Screen name="Page name here" component={Component name here} /> */}
        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={BottomTabNavigator}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="CarInformationScreen"
                component={CarInformationScreen}
            />
            <Stack.Screen
                name="FeedbackScreen"
                component={FeedbackScreen}
            />
            <Stack.Screen
                name="HistoryScreen"
                component={HistoryScreen}
            />
            <Stack.Screen
                name="HistoryEntryScreen"
                component={HistoryEntryScreen}
            />
            <Stack.Screen
                name="Settings"
                component={Settings}
            />
        </Stack.Navigator>
    )
}

export { AppNavigator };