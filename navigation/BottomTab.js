import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from '../screens/Register';
import Login from '../screens/Login';
import { DrawerToggleButton } from '@react-navigation/drawer';

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
            <Tab.Screen name="Register" component={Register} /> {/* Register and Login here as placeholders. Feel free to replace with your own component */}
            <Tab.Screen name="Login" component={Login} />
            {/* <Tab.Screen name="Page name here" component={Component name here} /> */}
        </Tab.Navigator>
    );
}

