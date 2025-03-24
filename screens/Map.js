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

    const [locationGarage1, setLocationGarage1] = useState({
      latitude: 65.0900,
      longitude: 25.4700,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    });

    const [locationGarage2, setLocationGarage2] = useState({
      latitude: 65.1900,
      longitude: 25.5700,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    });

    const [locationGarage3, setLocationGarage3] = useState({
      latitude: 65.2900,
      longitude: 25.6700,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    });

    const [locationGarage4, setLocationGarage4] = useState({
      latitude: 65.3900,
      longitude: 25.7700,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    });

    const [locationGarage5, setLocationGarage5] = useState({
      latitude: 65.4900,
      longitude: 25.8700,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    });

    const [locationGarage6, setLocationGarage6] = useState({
      latitude: 65.5900,
      longitude: 25.9700,
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
          {locationGarage1 && (
          <Marker
            coordinate={locationGarage1}
            title="Porsche Garage Oulu"
            description="Downtown Parking Garage, XYZ Leasing"
            pinColor="blue"
          />    
          )}
          {locationGarage2 && (
          <Marker
            coordinate={locationGarage2}
            title="Porsche Garage Oulu"
            description="Downtown Parking Garage, XYZ Leasing"
            pinColor="blue"
          />    
          )}
          {locationGarage3 && (
          <Marker
            coordinate={locationGarage3}
            title="Porsche Garage Oulu"
            description="Downtown Parking Garage, XYZ Leasing"
            pinColor="blue"
          />    
          )}
          {locationGarage4 && (
          <Marker
            coordinate={locationGarage4}
            title="Porsche Garage Oulu"
            description="Downtown Parking Garage, XYZ Leasing"
            pinColor="blue"
          />    
          )}
          {locationGarage5 && (
          <Marker
            coordinate={locationGarage5}
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