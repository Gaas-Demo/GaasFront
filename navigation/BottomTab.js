import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerToggleButton } from '@react-navigation/drawer';
import PlaceholderScreen from '../screens/Placeholder';
import Map from '../screens/Map';
import Homepage from '../screens/HomepageComponent';

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
            <Tab.Screen name="Home" component={Homepage} />
            <Tab.Screen name="Map" component={Map} />
            {/* <Tab.Screen name="Page name here" component={Component name here} /> */}
        </Tab.Navigator>
    );
}

