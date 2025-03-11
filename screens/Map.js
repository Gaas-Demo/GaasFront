import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import { GOOGLE_MAPS_API_KEY } from "@env";

export default function Map() {
    const [location, setLocation] = useState({
        latitude: 65.0800,
        longitude: 25.4800,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    });

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
              description="Your current location"
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
  });