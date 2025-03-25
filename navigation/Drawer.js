import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Settings from '../screens/Settings';
import { Image, Text } from 'react-native';
import BottomTabNavigator from './BottomTab';


const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) { // Used for putting things like plain text or images to drawer
  return (
    <DrawerContentScrollView {...props}>
      <Image
        source={require('../assets/favicon.png')} //Profile pic placeholder. Will probably be removed later
      />
      <Text>Pertti Makkonen</Text>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Settings" options={{ headerShown: true }} component={Settings} />
      {/*<Drawer.Screen name="Page name here" component={Component name here} /> */}
    </Drawer.Navigator>
  );
}