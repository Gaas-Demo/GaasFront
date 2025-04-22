import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Settings from '../screens/Settings';
import { Image, Text, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-paper';
import BottomTabNavigator from './BottomTab';
import Homepage from '../screens/HomepageComponent';



const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) { // Used for putting things like plain text or images to drawer
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.nameContainer}>
        <Image
          source={require('../assets/favicon.png')} //Profile pic placeholder. Will probably be removed later
        />
        <Text style={styles.nameText}>Pertti Makkonen</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ 
        headerShown: false, 
        drawerLabelStyle: styles.drawerLabel,
        drawerItemStyle: styles.navButtons,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon source="home" color={focused ? "#000000" : color} size={size} />
          ),
        }}
      />
      <Drawer.Screen name="Settings" component={Settings} style={styles.navButtons} options={{ 
        headerShown: true, 
        drawerIcon: ({ focused, color, size }) => (
          <Icon source="cog" color={focused ? "#000000" : color} size={size} />
        ),
        }}/>
      {/*<Drawer.Screen name="Page name here" component={Component name here} /> */}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginBottom: 40,
  },
  nameText: {
    marginLeft: "5%",
    fontWeight: "bold",
    fontSize: 18, 
    color: "#4e4e4e",
  },
  navButtons: {
    paddingVertical: 5,
    marginVertical: 5,
    borderRadius: 2,
    borderLeftWidth: 5, 
    borderColor: "#FF4242",
    backgroundColor: "#fff2f2",
  },
  drawerLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4e4e4e",
  },
});

const navButtonOptions = {
  headerStyle: styles.navButtons,
  headerTintColor: "#fff",
  headerTitleStyle: styles.navButtons,
}