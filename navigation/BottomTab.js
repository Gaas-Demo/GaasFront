import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerToggleButton } from '@react-navigation/drawer';
import PlaceholderScreen from '../screens/Placeholder';

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
            <Tab.Screen name="Placeholder1" component={PlaceholderScreen} />
            <Tab.Screen name="Placeholder2" component={PlaceholderScreen} />
            {/* <Tab.Screen name="Page name here" component={Component name here} /> */}
        </Tab.Navigator>
    );
}

