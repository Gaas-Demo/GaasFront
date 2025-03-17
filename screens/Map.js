import MapView, { PROVIDER_GOOGLE, Callout, Marker } from 'react-native-maps';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Linking, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import { GOOGLE_MAPS_API_KEY } from "@env";

export default function Map() {
    const [location, setLocation] = useState({
        latitude: 65.0800,
        longitude: 25.4800,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    });

    const [locationGarage, setLocationGarage] = useState({
      latitude: 65.0900,
      longitude: 25.4700,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    });

    const garageInfo = {
      name: "Downtown Parking Garage",
      leasingCompany: "XYZ Leasing",
      link: "https://example.com/garage-details"
    };

    useEffect(() => {
        const getUserPosition = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
        
            try {
                if (status !== 'granted') {
                    console.log('Geolocation failed');
                    return;
                }
                const position = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
                setLocation(prevLocation => ({
                    ...prevLocation,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }));
            } catch (error) {
                console.log(error);
            }
        };

        getUserPosition();
    }, []);

    return (
        <MapView style={styles.map} region={location} 
        provider={PROVIDER_GOOGLE} apiKey={GOOGLE_MAPS_API_KEY}>
          {location && (
            <Marker
              coordinate={location}
              title="You are here"
              description="Your location"
            />
          )}
          {locationGarage && (
          <Marker
            coordinate={locationGarage}
            title="Porsche Garage Oulu"
            description="Downtown Parking Garage, XYZ Leasing"
            pinColor="blue"
          />     
          )}
        </MapView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
    infobox: {
      width: '100%',
      height: 100,
    },
  });