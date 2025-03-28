import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, ActivityIndicator, Modal, ScrollView, TouchableOpacity } from "react-native";
import { Button, Text, TextInput } from 'react-native-paper';

import { rentedCar2 } from "../Testi/testi";



export default function Homepage({navigation}) {
  const [rentedCar, setRentedCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [showCar, setShowCar] = useState(false);
  

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
    <View style={styles.container}>
      {showCar ? (
        <>
          <Text style={styles.headline} variant="titleLarge">
            Current Contract
          </Text>
      
          <Image source={rentedCar.image} style={styles.carImage} />
          <Text style={styles.text} variant="bodyLarge">{rentedCar.model}</Text>
          <Text style={styles.text} variant="bodyLarge">License: {rentedCar.licensePlate}</Text>
          <Text style={styles.text} variant="bodyLarge">Rental Period: {rentedCar.rentalPeriod}</Text>
      
          <View style={styles.fuelContainer}>
            <Text style={styles.fuelLabel}>Fuel Level:</Text>
            <View style={styles.fuelBar}>
              <View style={[styles.fuelFill, { width: "80%" }]} />
            </View>
            <Text style={styles.fuelPercentage}>80%</Text>
          </View>
      
          <Button style={styles.buttonAskHelp} mode="contained" onPress={openChatModal}>
            Ask Help
          </Button>
      
          <Button style={styles.button} mode="contained">
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
      
      <Button style={styles.button} mode="contained" onPress={() => setShowCar(!showCar)}>
        Button to demo both versions of the homepage
      </Button>

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
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  text: {
    marginBottom: 20,
  },
  carImage: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonAskHelp: {
    width: "95%",
    marginTop: 15,
    paddingVertical: 7,
    backgroundColor: "#007BFF",
    borderRadius: 8,
    alignItems: "center",
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
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  chatWindow: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 300,
    paddingBottom: 20,
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
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  fuelBar: {
    width: "100%",
    height: 15,
    backgroundColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",
  },
  fuelFill: {
    height: "100%",
    width: "80%",
    backgroundColor: "#28a745",
  },
  fuelPercentage: {
    fontSize: 14,
    color: "#333",
    marginTop: 5,
  },
});