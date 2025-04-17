import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Icon } from 'react-native-paper';
import PlaceholderScreen from '../screens/Placeholder';
import { StackScreen1 } from './Stack';
import Map from '../screens/Map';
import Homepage from '../screens/HomepageComponent';
import GarageScreen from '../screens/GarageScreen';
import { StyleSheet } from 'react-native';
import CalendarScreen from '../screens/Calendar';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: true,
                tabBarActiveTintColor: '#FF4242',
                tabBarInactiveTintColor: '#8e8e8e',
                headerShown: true,
                headerLeft: () => (
                    <DrawerToggleButton />
                )
            }}>
            <Tab.Screen name="Contracts" component={Homepage} options={{
                ...headerOptions,
                tabBarIcon: ({ color, size }) => (
                    <Icon source="garage-variant" size={size} color={color} />
                ),
            }}/>
            <Tab.Screen name="Car Search" component={StackScreen1} options={{
                ...headerOptions,
                tabBarIcon: ({ color, size }) => (
                    <Icon source="car-hatchback" size={size} color={color} />
            )}}/>
            <Tab.Screen name="Map" component={Map} options={{
                ...headerOptions,
                tabBarIcon: ({ color, size }) => (
                    <Icon source="map-search" size={size} color={color} />
            )}}/>
            
            <Tab.Screen name="Calendar" component={CalendarScreen}  options={{
                ...headerOptions,
                tabBarIcon: ({ color, size }) => (
                    <Icon source="calendar" size={size} color={color} />
            )}}/>

            {/* <Tab.Screen name="Page name here" component={Component name here} /> */}
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: "#FF4242",
    },
    headerTitle: {
        fontWeight: "bold",
    },
});

const headerOptions = {
    headerStyle: styles.header,
    headerTintColor: "#fff",
    headerTitleStyle: styles.headerTitle,
};
