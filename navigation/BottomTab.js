import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Icon } from 'react-native-paper';
import PlaceholderScreen from '../screens/Placeholder';
import Map from '../screens/Map';
import Homepage from '../screens/HomepageComponent';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {

    const options={
        headerStyle: { backgroundColor: "#FF4242" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
    }

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: true,
                headerShown: true,
                headerLeft: () => (
                    <DrawerToggleButton />
                )
            }}>
            <Tab.Screen name="Your Contracts" component={Homepage} options={options}/>
            <Tab.Screen name="Browse" component={PlaceholderScreen} />
            <Tab.Screen name="Map" component={Map} />
            {/* <Tab.Screen name="Page name here" component={Component name here} /> */}
        </Tab.Navigator>
    );
}


