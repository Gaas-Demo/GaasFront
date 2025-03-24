import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerToggleButton } from '@react-navigation/drawer';
import PlaceholderScreen from '../Screens/Placeholder';
import { StackScreen1 } from './Stack';
import GarageScreen from '../Screens/GarageScreen';
import PlaceholderScreen from '../Screens/Placeholder';
import Map from '../Screens/Map';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: true,
                headerShown: true,
                headerLeft: () => (
                    <DrawerToggleButton />
                )
            }}>
            <Tab.Screen name="Testi" component={StackScreen1} />
            <Tab.Screen name="Placeholder2" component={PlaceholderScreen} />
            {/* <Tab.Screen name="Page name here" component={Component name here} /> */}
        </Tab.Navigator>
    );
}

