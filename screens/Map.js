import MapView, { PROVIDER_GOOGLE, Callout, Marker } from 'react-native-maps';
import { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Linking, TouchableOpacity, Animated, Modal } from 'react-native';
import { Card, Button } from 'react-native-paper';
import * as Location from 'expo-location';
import { GOOGLE_MAPS_API_KEY } from "@env";
import GarageScreen from './GarageScreen';
import CarInformationScreen from './CarInformationScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function Map({navigation}) {

  const [location, setLocation] = useState({
    latitude: 65.0800,
    longitude: 25.4800,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  });
  const [selectedGarage, setSelectedGarage] = useState(null);

  const garageLocations = [
    { latitude: 65.0900, longitude: 25.4700, title: "Porsche Garage Oulu, Ritaharju" },
    { latitude: 65.0070, longitude: 25.5010, title: "Porsche Garage Oulu, Raksila" },
    { latitude: 60.1900, longitude: 24.9300, title: "Porsche Garage Helsinki" },
    { latitude: 61.4900, longitude: 23.7740, title: "Porsche Garage Tampere" },
    { latitude: 51.5010, longitude: -0.1400, title: "Porsche Garage Lontoo" },
    { latitude: 52.5180, longitude: 13.4300, title: "Porsche Garage Berliini" },
  ];

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d.toFixed(2);
  }
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

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
    <View style={styles.container}>
      <MapView style={styles.map} region={location} provider={PROVIDER_GOOGLE} apiKey={GOOGLE_MAPS_API_KEY}>
        {location && (
          <Marker
            coordinate={location}
            title="You are here"
            description="Your location"
          />
        )}
        {garageLocations.map((garage, index) => (
          <Marker
            key={index}
            coordinate={garage}
            title={garage.title}
            description="Downtown Parking Garage, XYZ Leasing"
            pinColor="blue"
            onPress={() => setSelectedGarage(garage)}
          />
        ))}
      </MapView>

      {selectedGarage && (
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>{selectedGarage.title}</Text>
            <Text>Garage Location: {selectedGarage.latitude}, {selectedGarage.longitude}</Text>
            <Text>
              Distance: {calculateDistance(
                location.latitude,
                location.longitude,
                selectedGarage.latitude,
                selectedGarage.longitude
              )} km
            </Text>
          </Card.Content>
          <Card.Actions style={styles.cardActionsContainer}>
            <TouchableOpacity
              style={styles.directionsButton}
              onPress={() => {
                const url = `https://www.google.com/maps/dir/?api=1&origin=${location.latitude},${location.longitude}&destination=${selectedGarage.latitude},${selectedGarage.longitude}&travelmode=driving`;
                Linking.openURL(url);
              }}
            >
              <Text style={styles.directionsButtonText}>Directions</Text>
              <MaterialCommunityIcons name="arrow-top-right" size={18} color="#000" style={styles.directionsIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.showGarageButton} onPress={()=> navigation.navigate('Car Search', {screen: 'GarageScreen', params: { from: 'Map'}})}>
              <Text style={styles.showGarageButtonText}>Show Garage</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedGarage(null)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </Card.Actions>
        </Card>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  card: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "white",
    elevation: 5,
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardActionsContainer:{
    //flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  closeButton: {
    width: "25%",
    marginTop: 15,
    paddingVertical: 12,
    backgroundColor: "#DC3545",
    borderRadius: 8,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  showGarageButton: {
    width: "35%",
    marginTop: 15,
    paddingVertical: 12,
    backgroundColor: "#007BFF",
    borderRadius: 8,
    alignItems: "center",
  },
  showGarageButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  directionsButton: {
    width: "35%",
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  directionsButtonText: {
    color: '#007BFF',
    textDecorationLine: 'underline',
    fontSize: 16,
    marginRight: 4,
  },
});


/*
<BottomSheet
          ref={bottomSheetRef} // Ensure useRef is being used properly
          index={-1} // Keeps it hidden initially
          snapPoints={["25%", "50%"]} // Set snap points as per your needs
        >
          <BottomSheetView style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </BottomSheetView>
        </BottomSheet> */