import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, ActivityIndicator, Modal, ScrollView, TouchableOpacity } from "react-native";
import { Button, Text, TextInput } from 'react-native-paper';

import { rentedCar2 } from "../Testi/testi";



export default function Homepage({navigation}) {
  const [rentedCar, setRentedCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [VehicleCallmodalVisible, VehicleCallsetModalVisible] = useState(false);
  const [endContractModalVisible, setEndContractModalVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [showCar, setShowCar] = useState(false);
  const [distanceDriven, setDistanceDriven] = useState(32.4);


  useEffect(() => {
    const focusListener = navigation.addListener('focus', () => {
    //setTimeout(() => {
      
      console.log("j",rentedCar2)

      if (rentedCar2 != null)
      {
        setRentedCar({
          id: rentedCar2.id,
          model: rentedCar2.model,
          licensePlate: "XYZ 987",
          rentalPeriod: "3 days",
          image: require("../assets/CarImage.jpg"),
        });
        setShowCar(true)
      }
    
      setLoading(false);
      
   // }, 1000);
    }); return focusListener
  });

  const openChatModal = () => setModalVisible(true);
  const closeChatModal = () => {
    setModalVisible(false);
    setMessage("");
  };

  const openVehicleCallModal = () => VehicleCallsetModalVisible(true);
  const closeVehicleCallModal = () => {
    VehicleCallsetModalVisible(false);
  };

  const openEndContractModal = () => setEndContractModalVisible(true);
  const closeEndContractModal = () => setEndContractModalVisible(false);

  const handleEndContract = () => {
    setShowCar(false);
    setEndContractModalVisible(false);
  };

  const sendMessage = () => {
    setMessage("");
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text>Loading rented car...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      {showCar ? (
        <>
          <Text style={styles.headline} variant="titleLarge">
            Current Contract
          </Text>
      
          <Image source={rentedCar.image} style={styles.carImage} />
          <View style={styles.infoCard}>
          <Text style={styles.text} variant="bodyLarge">{rentedCar.model}</Text>
          <Text style={styles.text} variant="bodyLarge">License: {rentedCar.licensePlate}</Text>
          <Text style={styles.text} variant="bodyLarge">Rental Period: {rentedCar.rentalPeriod}</Text>
          </View>
      
          <View style={styles.metricCard}>
            <Text style={styles.fuelLabel}>Fuel Level:</Text>
            <View style={styles.fuelBar}>
              <View style={[styles.fuelFill, { width: "80%" }]} />
            </View>
            <Text style={styles.fuelPercentage}>80%</Text>

            <View style={styles.distanceContainer}>
              <Text style={styles.fuelLabel}>Distance Driven:</Text>
              <Text style={styles.distanceValue}>{distanceDriven} km</Text>
            </View>
          </View>

      
          <Button style={styles.buttonAskHelp} mode="contained" onPress={openChatModal}>
            Ask Help
          </Button>

          <Button style={styles.button} mode="contained" onPress={openVehicleCallModal}>
            Call your vehicle
          </Button>

        
          <Modal
            animationType="slide"
            transparent={true}
            visible={VehicleCallmodalVisible}
            onRequestClose={closeVehicleCallModal}
          >
            <View style={styles.modalBackground}>
              <View style={styles.chatWindow}>
                <Text style={styles.chatHeader}>Vehicle Call</Text>
                <Text style={styles.messageText}>Your vehicle is on the way!</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                  <TouchableOpacity
                    style={[styles.button, { backgroundColor: "#28a745", flex: 1, marginRight: 10 }]}
                    onPress={closeVehicleCallModal}
                  >
                    <Text style={{ color: "#fff", textAlign: "center" }}>OK</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, { backgroundColor: "#6c757d", flex: 1 }]}
                    onPress={closeVehicleCallModal}
                  >
                    <Text style={{ color: "#fff", textAlign: "center" }}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
      
          {/*<Button style={styles.button} mode="contained">*/}
          <Button style={styles.button} mode="contained" onPress={openEndContractModal}>
            End Contract
          </Button>
        </>
      ) : (
        <>
          <Text style={styles.headline}>Welcome to your Garage in a pocket!</Text>
          <Text style={styles.text}>Please select a car to continue.</Text>
          {/*<Button style={styles.button} mode="contained" onPress={() => setShowCar(true)}>
            Select a Car
          </Button>*/}
        </>
      )}
      
      {/*<Button style={styles.button} mode="contained" onPress={() => setShowCar(!showCar)}>
        Button to demo both versions of the homepage
      </Button>*/}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeChatModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.chatWindow}>
            <Text style={styles.chatHeader}>Customer Support</Text>
            <ScrollView style={styles.messagesContainer}>
              <View style={styles.messageBubble}>
                <Text style={styles.messageText}>Hi! How can I assist you today?</Text>
              </View>
            </ScrollView>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Type your message..."
                value={message}
                onChangeText={setMessage}
              />
              <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                <Text style={styles.sendButtonText}>Send</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={closeChatModal}>
              <Text style={styles.closeButtonText}>Close Chat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={endContractModalVisible}
        onRequestClose={closeEndContractModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.chatWindow}>
            <Text style={styles.chatHeader}>End Contract</Text>
            <Text style={styles.messageText}>Are you sure you want to end this contract?</Text>
            
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
              <TouchableOpacity style={[styles.button, { backgroundColor: "#dc3545", flex: 1, marginRight: 10 }]} onPress={handleEndContract}>
                <Text style={{ color: "#fff", textAlign: "center" }}>Yes, terminate my current contract</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, { backgroundColor: "#6c757d", flex: 1 }]} onPress={closeEndContractModal}>
                <Text style={{ color: "#fff", textAlign: "center" }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    backgroundColor: "#f8f9fa",
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  infoCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginBottom: 20,
    elevation: 2,
  },  
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f9fa",
  },
  contractCard: {
    marginTop: 50,
    width: "95%",
    minHeight: 380,
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 15,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: "#cc0000", 
    borderLeftWidth:5,
    shadowColor: "#4d0000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 7,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 22
  },
  headline: {
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 22,
    color: "#212529",
    textAlign: "center",
  },  
  text: {
    marginBottom: 20,
  },
  carImage: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },  
  button: {
    width: "95%",
    marginTop: 15,
    paddingVertical: 7,
    backgroundColor: "#DC3545",
    borderRadius: 8,
    alignItems: "center",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  chatWindow: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    minHeight: 300,
  },
  chatHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  messagesContainer: {
    maxHeight: 200,
    marginBottom: 15,
  },
  messageBubble: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f1f3f5",
    borderRadius: 15,
    marginRight: 10,
    fontSize: 16,
    minHeight: 40,
  },
  fuelContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  fuelLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#495057",
    marginBottom: 5,
  },
  fuelPercentage: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#28a745",
    marginTop: 5,
  },
  fuelBar: {
    width: "100%",
    height: 15,
    backgroundColor: "#e9ecef",
    borderRadius: 8,
    overflow: "hidden",
  },
  fuelFill: {
    height: "100%",
    backgroundColor: "#28a745",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },  
  distanceContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  distanceValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  metricCard: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  
});